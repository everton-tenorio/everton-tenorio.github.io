<!-- File: components/ProjectsShowcase.vue -->
<template>
  <div v-if="projects && projects.length > 0" class="relative w-full max-w-6xl mx-auto px-4">
    <!-- Container do projeto atual -->
    <div class="relative min-h-[500px] md:min-h-[400px]">
      <TransitionGroup name="fade">
        <div
          v-if="currentProject"
          :key="currentProject.id"
          class="grid md:grid-cols-2 gap-8 items-center"
        >
          <!-- Imagem à esquerda -->
          <div class="relative group">
            <div class="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <img
                v-if="currentProject.image"
                :src="currentProject.image"
                :alt="currentProject.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center text-neutral-400"
              >
                <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <!-- Indicador de posição - discreto -->
            <div class="absolute -bottom-6 left-0 flex gap-1.5">
              <button
                v-for="(_, idx) in projects"
                :key="idx"
                @click="goToProject(idx)"
                class="h-1 rounded-full transition-all duration-300"
                :class="idx === currentIndex 
                  ? 'w-8 bg-neutral-900 dark:bg-white' 
                  : 'w-1 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'"
                :aria-label="`Ir para projeto ${idx + 1}`"
              />
            </div>
          </div>

          <!-- Conteúdo à direita -->
          <div class="space-y-4">
            <!-- Nome do projeto -->
            <h3 class="text-3xl md:text-4xl font-bold dark:text-neutral-900 text-white">
              {{ currentProject.name }}
            </h3>

            <!-- Descrição -->
            <p class="text-base md:text-lg dark:text-neutral-600 text-neutral-300 leading-relaxed">
              {{ currentProject.description }}
            </p>

            <!-- Tech stack (se existir) -->
            <div v-if="currentProject.tech && currentProject.tech.length > 0" class="flex flex-wrap gap-2">
              <span
                v-for="tech in currentProject.tech"
                :key="tech"
                class="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium border border-neutral-200 dark:border-neutral-700"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links / Redes sociais -->
            <div v-if="currentProject.links && Object.keys(currentProject.links).length > 0" class="grid grid-cols-2 gap-2 pt-2">
              <!-- GitHub -->
              <a
                v-if="currentProject.links.github"
                :href="currentProject.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200 font-medium text-sm"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <!-- Instagram -->
              <a
                v-if="currentProject.links.instagram"
                :href="currentProject.links.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200 font-medium text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                </svg>

                <span>Instagram</span>
              </a>

              <!-- Demo -->
              <a
                v-if="currentProject.links.demo"
                :href="currentProject.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 dark:text-neutral-900 text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 font-medium text-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Demo</span>
              </a>

              <!-- Website -->
              <a
                v-if="currentProject.links.website"
                :href="currentProject.links.website"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 dark:text-neutral-900 text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 font-medium text-sm"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Botão de navegação - direita -->
    <button
      v-if="projects.length > 1"
      @click="nextProject"
      class="absolute right-[-5px] top-1/3 -translate-y-1/2 md:translate-x-1/2 p-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:scale-110 group"
      aria-label="Próximo projeto"
    >
      <svg class="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Botão de navegação - esquerda -->
    <button
      v-if="projects.length > 1"
      @click="prevProject"
      class="absolute left-[-5px] top-1/3 -translate-y-1/2 md:-translate-x-1/2 p-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:scale-110 group"
      aria-label="Projeto anterior"
    >
      <svg class="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface ProjectLink {
  github?: string
  demo?: string
  website?: string
  instagram?: string
}

interface Project {
  id: string
  name: string
  description: string
  image?: string
  tech?: string[]
  links?: ProjectLink
}

interface Props {
  projects: Project[]
  autoplayInterval?: number // Tempo em ms entre transições (padrão: 5000ms)
}

const props = withDefaults(defineProps<Props>(), {
  autoplayInterval: 4500
})

const currentIndex = ref(0)
let autoplayTimer: NodeJS.Timeout | null = null

// Computed property para o projeto atual - seguro para SSR
const currentProject = computed(() => {
  if (!props.projects || props.projects.length === 0) return null
  return props.projects[currentIndex.value]
})

const nextProject = () => {
  if (!props.projects || props.projects.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % props.projects.length
  resetAutoplay() // Reinicia o timer quando usuário navega manualmente
}

const prevProject = () => {
  if (!props.projects || props.projects.length === 0) return
  currentIndex.value = currentIndex.value === 0 
    ? props.projects.length - 1 
    : currentIndex.value - 1
  resetAutoplay() // Reinicia o timer quando usuário navega manualmente
}

const goToProject = (index: number) => {
  currentIndex.value = index
  resetAutoplay() // Reinicia o timer quando usuário navega manualmente
}

// Função para iniciar autoplay
const startAutoplay = () => {
  if (!props.projects || props.projects.length <= 1) return
  
  autoplayTimer = setInterval(() => {
    nextProject()
  }, props.autoplayInterval)
}

// Função para parar autoplay
const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// Função para reiniciar autoplay (quando usuário interage)
const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

// Inicia autoplay quando componente é montado (apenas no client-side)
onMounted(() => {
  startAutoplay()
})

// Limpa o timer quando componente é desmontado
onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-active {
  position: absolute;
  width: 100%;
}
</style>