<template>
    <div class="container mx-auto lg:mt-2 px-4 lg:px-8 lg:py-12">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Coluna esquerda: Profile -->
        <div class="lg:mt-8">
            <Profile />
        </div>
  
        <!-- Coluna direita: Conteúdo principal -->
        <div class="flex-1 lg:ml-10 lg:mr-0 lg:w-8">
          <Projects />
          <DevtoPostsCarousel />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Profile from '~/components/Profile.vue'
  import Projects from '~/components/Projects.vue'
  import DevtoPostsCarousel from '~/components/DevtoPostsCarousel.vue'
  </script>
  