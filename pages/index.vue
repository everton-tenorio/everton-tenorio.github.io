<template>
  <header class="p-4 lg:p-4 bg-[#000000] shadow-sm sticky top-0 z-50">
    <!-- Cabeçalho removido temporariamente -->
  </header>

  <div class="container mx-auto px-4 pt-5 lg:mt-2 pb-20 lg:px-20 lg:py-12">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="lg:mt-8">
        <Profile />
      </div>

      <div class="flex-1 mt-6 mb-4 lg:ml-4 lg:mr-1">
        <section>
          <!-- Mensagens de carregamento e vazio -->
          <div v-if="isLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <p class="text-gray-600 dark:text-gray-300 mt-2">Carregando posts...</p>
          </div>

          <div v-else-if="posts.length === 0" class="text-center py-8">
            <div class="text-4xl mb-2">📝</div>
            <p class="text-gray-600 dark:text-gray-300">...</p>
          </div>

          <!-- Carrossel de posts -->
          <div v-else class="relative">
            <!-- Botão esquerdo -->
            <button
              @click="scrollByOffset(-scrollAmount)"
              :class="[
                'absolute top-1/2 -translate-y-1/2 left-2 z-10 hidden sm:flex items-center justify-center rounded-full p-2 shadow-md bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75',
                canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
              ]"
              aria-label="Scroll para a esquerda"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Carrossel -->
            <div
              ref="carouselRef"
              class="carousel-wrapper"
              @scroll="onScroll"
            >
              <DevtoPostsCarousel
                v-for="post in posts.slice(0, 5)"
                :key="post.slug"
                :post="post"
                class="carousel-item"
              />
            </div>

            <!-- Botão direito -->
            <button
              @click="scrollByOffset(scrollAmount)"
              :class="[
                'absolute top-1/2 -translate-y-1/2 right-2 z-10 hidden sm:flex items-center justify-center rounded-full p-2 shadow-md bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75',
                canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
              ]"
              aria-label="Scroll para a direita"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        <div class="mt-4 mb-[10px] lg:mb-[2px] p-2">
          <Projects />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Profile from '~/components/Profile.vue'
import Projects from '~/components/Projects.vue'
import DevtoPostsCarousel from '~/components/DevtoPostsCarousel.vue'
import { usePosts } from '~/composables/usePosts'

const { posts, isLoading } = usePosts()

const carouselRef = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const scrollAmount = 250

const scrollByOffset = (offset: number) => {
  if (!carouselRef.value) return
  carouselRef.value.scrollBy({ left: offset, behavior: 'smooth' })
}

const updateScrollButtons = () => {
  const el = carouselRef.value
  if (!el) return
  canScrollLeft.value = el.scrollLeft > 0
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

const onScroll = () => {
  updateScrollButtons()
}

onMounted(() => {
  nextTick(() => {
    updateScrollButtons()
    const el = carouselRef.value
    if (el) {
      el.addEventListener('scroll', onScroll, { passive: true })
    }

    // ResizeObserver mais robusto que resize simples
    const observer = new ResizeObserver(updateScrollButtons)
    observer.observe(el!)

    window.addEventListener('resize', updateScrollButtons)

    // Cleanup
    onBeforeUnmount(() => {
      el?.removeEventListener('scroll', onScroll)
      observer.disconnect()
      window.removeEventListener('resize', updateScrollButtons)
    })
  })
})

useHead({
  title: 'Everton Tenorio - DevOps Engineer',
  meta: [{ name: 'description', content: 'Desenvolvimento e tecnologia' }]
})
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  padding-bottom: 0.25rem;
  scroll-snap-type: x mandatory;
}

/* Cada item do carrossel */
.carousel-item {
  flex: 0 0 250px;
  scroll-snap-align: start;
}

/* Responsivo no mobile */
@media (max-width: 640px) {
  .carousel-item {
    flex: 0 0 80%;
  }
}
</style>
