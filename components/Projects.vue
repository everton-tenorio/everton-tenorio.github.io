<template>
    <div class="w-full font-[Ubuntu] mt-8 pb-12 lg:mb-7 lg:mt-0">
      <div class="relative lg:h-[1cover bg-center shado0,0,0,0.47)] lg:mx-[-0px] lg:mt-[-10px] lg:mb-2">
        
        <div id="particles-container" class="absolute top-0 left-0 w-full h-[100px] overflow-hidden z-[1]"></div>
        <h3 class="text-white text-lg lg:text-[1.5rem] text-left pt-5 z-[2] relative">
          <a :href="currentProject.url">
            <span class="text-[#fdf8f893] text-xs rounded px-1.5 py-0.5 font-[Ubuntu]">
              <FontAwesomeIcon icon="fa-brands fa-github" class="text-3xl text-white" />
            </span>
          {{ currentProject.description }}

          </a>
        </h3>
      </div>
    </div>
  </template>
  
<script setup>
  import { onMounted, ref } from 'vue'
  
  // Projetos
  const projects = ref([
    {
      name: 'cty',
      description: 'Convententional Commits + Python = cty',
      url: 'https://github.com/everton-tenorio/cty',
    },
    {
      name: 'twish',
      description: 'twish: Tweets in Shell! 🐦‍⬛',
      url: 'https://github.com/everton-tenorio/twish',
    },
    {
      name: 'svg-icons',
      description: 'Roadmap.sh DevOps Project',
      url: 'https://github.com/everton-tenorio/roadmapsh-devops-projects',
    },
  ])
  
  const currentIndex = ref(0)
  const currentProject = ref(projects.value[0])
  
  // Função para alternar projetos
  const cycleProjects = () => {
    setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % projects.value.length
      currentProject.value = projects.value[currentIndex.value]
    }, 2800)
  }
  
  // Função para inicializar particles.js
  const initParticles = () => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-container', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 500 } },
          color: { value: '#e8020e' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#e8020e' },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.6,
            anim: { enable: false },
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
          },
        },
        retina_detect: true,
      })
    }
  }
  
  onMounted(() => {
    // Executa apenas no cliente
    if (process.client) {
      cycleProjects()
  
      // Carrega o script do particles.js dinamicamente
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
      script.async = true
      script.onload = () => {
        initParticles()
      }
      script.onerror = () => {
        console.error('Erro ao carregar particles.js')
      }
      document.body.appendChild(script)
    }
  })
</script>
  
<style scoped>

</style>