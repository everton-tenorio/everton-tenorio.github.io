<template>
  <header class="p-4 lg:p-4 bg-[#000000] shadow-sm sticky top-0 z-50">
    <!-- Cabeçalho removido temporariamente -->
  </header>

  <div class="page-container">
    <!-- Sidebar Profile (Fixed no desktop) -->
    <aside class="profile-column">
      <Profile />
    </aside>

    <!-- Conteúdo Principal -->
    <main class="content-column">
      <!-- Projetos -->
      <section>
        <Projects :projects="projectsData"/>
      </section>

      <!-- Posts Section -->
      <section class="md:mt-4 lg:mt-4 mt-[60px]">
        <!-- Mensagens de carregamento e vazio -->
        <div v-if="isLoading" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p class="text-gray-600 dark:text-gray-300 mt-2">Carregando posts...</p>
        </div>

        <div v-else-if="posts.length === 0" class="text-center py-8">
          <div class="text-4xl">📝</div>
          <p class="text-gray-600 dark:text-gray-300">...</p>
        </div>

        <!-- Carrossel de posts -->
        <div v-else class="relative">
          <!-- Botão esquerdo -->
          <button
            @click="scrollByOffset(-scrollAmount)"
            :class="[
              'absolute top-1/2 -translate-y-1/2 left-2 z-10 hidden sm:flex items-center justify-center rounded-full p-2 shadow-md bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 transition-opacity duration-200',
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
              'absolute top-1/2 -translate-y-1/2 right-2 z-10 hidden sm:flex items-center justify-center rounded-full p-2 shadow-md bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 transition-opacity duration-200',
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

      <!-- Tech Skills & Photo Albums -->
      <section class="space-y-8">
        <TechSkillsShowcase />
        <PhotoAlbums />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import Profile from '~/components/Profile.vue'
import Projects from '~/components/Projects.vue'
import DevtoPostsCarousel from '~/components/DevtoPostsCarousel.vue'
import PhotoAlbums from '~/components/PhotoAlbums.vue'
import TechSkillsShowcase from '~/components/TechSkillsShowcase.vue'
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

watch(posts, async (newVal) => {
  if (newVal.length) {
    await nextTick()
    updateScrollButtons()
  }
})

onMounted(() => {
  nextTick(() => {
    updateScrollButtons()
    setTimeout(updateScrollButtons, 300)

    const el = carouselRef.value
    if (el) {
      el.addEventListener('scroll', onScroll, { passive: true })
    }

    const observer = new ResizeObserver(updateScrollButtons)
    if (el) observer.observe(el)

    window.addEventListener('resize', updateScrollButtons)

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

const projectsData = [
    {
    id: 'nmei',
    name: 'nMEI',
    description: 'Os MEIs representam mais de 50% das empresas ativas no Brasil, com 11 milhões de registros. Com o nMEI, você controla vendas, estoque, despesas e acompanha seu limite de faturamento anual (R$ 81 mil) em tempo real. Gerencie seu negócio de forma simples, evite desenquadramento e tome decisões inteligentes com dashboards completos.',
    image: '/images/projects/nMEI.png',
    tech: ['MEI', 'Empreendedorismo'],
    links: {
      website: 'https://nmei.vercel.app/'
    }
  },
  {
    id: 'devops-diary',
    name: 'DevOpsDiary',
    description: 'DevOps vai além de cargo: é cultura, automação, segurança e resolução de desafios na rede.',
    image: '/images/projects/devopsdiary.png',
    tech: ['DevOps'],
    links: {
      // github: 'https://github.com/everton-tenorio/devopsdiary',
      website: 'https://devopsdiary.site'
    }
  },
  {
    id: 'portalfut',
    name: 'Portalfut - Agregador de notícias de futebol',
    description: 'Acompanhe as principais notícias de futebol e confira a agenda dos jogos.',
    image: '/images/projects/portalfut.png',
    tech: ['Futebol', 'Web Dev'],
    links: {
      website: 'https://portalfut.com'
    }
  }
]
</script>

<style scoped>
/* Layout principal - Grid no desktop, Stack no mobile */
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Desktop - Sidebar fixa + conteúdo */
@media (min-width: 1024px) {
  .page-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    padding: 3rem 2rem;
  }

  .profile-column {
    position: sticky;
    top: 6rem;
    align-self: start;
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
  }

  .content-column {
    min-width: 0; /* Previne overflow no grid */
    max-width: 900px;
  }
}

/* Mobile - Stack vertical */
@media (max-width: 1023px) {
  .page-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

/* Carrossel de posts */
.carousel-wrapper {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  padding-bottom: 0.25rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #404040 transparent;
}

.carousel-wrapper::-webkit-scrollbar {
  height: 6px;
}

.carousel-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.carousel-wrapper::-webkit-scrollbar-thumb {
  background: #404040;
  border-radius: 3px;
}

.carousel-wrapper::-webkit-scrollbar-thumb:hover {
  background: #525252;
}

/* Cada item do carrossel */
.carousel-item {
  flex: 0 0 280px;
  scroll-snap-align: start;
}

/* Responsivo no mobile */
@media (max-width: 640px) {
  .carousel-item {
    flex: 0 0 85%;
  }
}

/* Espaçamento entre seções */
.space-y-8 > * + * {
  margin-top: 2rem;
}
</style>
