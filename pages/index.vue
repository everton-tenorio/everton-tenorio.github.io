<template>
  <header class="p-4 lg:p-4 bg-[#000000] shadow-sm sticky top-0 z-50">
      <!--<h1 class="text-xl font-bold text-[#28c45c]">
        <a data-v-d883d8c4="" href="https://devopsdiary.site" 
        class="router-link-active router-link-exact-active text-xl font-mono font-bold text-terminal-green hover:text-terminal-white transition-colors duration-200 terminal-logo" 
        aria-current="page"><span data-v-d883d8c4="" class="text-[white]">#</span>DevOpsDiary 
      
      <span class="text-[14px] text-[white]">- Hands-On Projects</span>
      </a>
        
      </h1>-->
  </header>

  <div class="container mx-auto lg:mt-2 px-4 pt-10 lg:mt-[-30px] pb-20 lg:px-20 lg:py-12">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="lg:mt-8">
        <Profile />
      </div>

      <div class="flex-1 lg:ml-4 lg:mr-1">

         <div class="mb-[30px] lg:mb-[-2px] p-6">
          <Projects />
         </div>
          
        <section>
          <div class="flex justify-between items-center mb-6">
            <!--<h2 class="text-2xl font-bold text-gray-900 dark:text-white"></h2>
            <NuxtLink
              to="/posts"
              class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
               →
            </NuxtLink>-->
          </div>

          <div v-if="isLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <p class="text-gray-600 dark:text-gray-300 mt-2">Carregando posts...</p>
          </div>

          <div v-else-if="posts.length === 0" class="text-center py-8">
            <div class="text-4xl mb-2">📝</div>
            <p class="text-gray-600 dark:text-gray-300">Nenhum post encontrado.</p>
          </div>

          <!-- ========= Carrossel Horizontal com Setas ========= -->
          <div v-else class="relative">
            <!-- Botão ESQUERDA -->
            <button
              @click="scrollByOffset(-scrollAmount)"
              :class="[
                'absolute top-1/2 -translate-y-1/2 left-2 z-10 hidden sm:flex items-center justify-center transition-opacity duration-300 rounded-full p-2 shadow-md bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75',
                canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
              ]"
              aria-label="Scroll para a esquerda"
            >
              <!-- Ícone Chevron-Left (Heroicons) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-700 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Container do Carrossel -->
            <div
              ref="carouselRef"
              class="carousel-wrapper flex gap-4 overflow-x-auto scroll-smooth -mx-2 px-2 py-4 cursor-grab sm:cursor-grab"
              @scroll="onScroll"
            >
              <DevtoPostsCarousel
                v-for="post in posts.slice(0, 4)"
                :key="post.slug"
                :post="post"
                class="flex-0-0-auto"
              />
            </div>

            <!-- Botão DIREITA -->
            <button
              @click="scrollByOffset(scrollAmount)"
              :class="[
                'absolute top-1/2 -translate-y-1/2 right-2 z-10 hidden sm:flex items-center justify-center transition-opacity duration-300 rounded-full p-2 shadow-md bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75',
                canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
              ]"
              aria-label="Scroll para a direita"
            >
              <!-- Ícone Chevron-Right (Heroicons) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-700 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <!-- ======= Fim do Carrossel ======= -->
        </section>
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

// Props / Composables
const { posts, isLoading } = usePosts()

// References e reativos para controlar as setas
const carouselRef = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

// Controle de scroll por clique nas setas
const scrollAmount = 300 // quantos pixels rolar por clique (ajuste conforme desejar)
const scrollByOffset = (offset: number) => {
  if (!carouselRef.value) return
  carouselRef.value.scrollBy({ left: offset, behavior: 'smooth' })
}

// Atualiza estados de canScrollLeft e canScrollRight
const updateScrollButtons = () => {
  if (!carouselRef.value) {
    canScrollLeft.value = false
    canScrollRight.value = false
    return
  }
  const el = carouselRef.value
  canScrollLeft.value = el.scrollLeft > 0
  // scrollWidth = total, clientWidth = visível; se scrollLeft + clientWidth < scrollWidth, há mais conteúdo à direita
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

// Handler de evento de scroll
const onScroll = () => {
  updateScrollButtons()
}

// Montagem: aguarda o DOM, faz checagem inicial e adiciona listener
onMounted(() => {
  nextTick(() => {
    updateScrollButtons()
    if (carouselRef.value) {
      carouselRef.value.addEventListener('scroll', onScroll, { passive: true })
    }
    // Também atualizar caso a janela seja redimensionada
    window.addEventListener('resize', updateScrollButtons)
  })
})

// Desmontagem: remover listeners
onBeforeUnmount(() => {
  if (carouselRef.value) {
    carouselRef.value.removeEventListener('scroll', onScroll)
  }
  window.removeEventListener('resize', updateScrollButtons)
})

// Meta tags para SEO
useHead({
  title: 'Meu Blog - Página Inicial',
  meta: [
    { name: 'description', content: 'Blog pessoal com posts sobre desenvolvimento e tecnologia' }
  ]
})
</script>

<style scoped>
/* ================= Estilos para o Carrossel e Setas ================= */

/* Carrossel (wrapper) */
.carousel-wrapper {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* rolagem suave em iOS/Android */
  scroll-behavior: smooth;
  padding-bottom: 0.25rem; /* evita que shadow mascarar conteúdo */
}

/* Cada instância de DevtoPostsCarousel é flex-0-0-auto para largura fixa */
.carousel-wrapper > * {
  flex: 0 0 280px; /* largura de cada card no desktop */
}

@media (max-width: 640px) {
  .carousel-wrapper > * {
    flex: 0 0 80%; /* card ocupa 80% da largura no mobile */
  }
}

/* Botões de navegação (compartilhados pelos dois) */
button[aria-label^="Scroll"] {
  /* 
    hidden sm:flex => oculto em telas < 640px, aparece a partir de sm (>=640px)
    transition-opacity => animação ao trocar entre opacity-0 e opacity-100
  */
  /* Já aplicado diretamente via :class no template */
}

/* Ajustes adicionais de sombra e posicionamento já definidos via Tailwind no template */
</style>
