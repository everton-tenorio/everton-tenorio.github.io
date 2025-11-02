<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <div class="bg-black text-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-6xl mx-auto px-4 py-8 md:px-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-gray-400 dark:text-white mb-2">Posts</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              everton.sh
            </p>
          </div>
          <NuxtLink 
              to="/" 
              class="inline-flex items-center px-6 py-3 bg-[#1f2123] text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Home
            </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-4 py-12 md:px-8">
      <div v-if="isLoading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p class="text-gray-600 dark:text-gray-300 mt-4">Carregando posts...</p>
      </div>
      
      <div v-else-if="posts.length === 0" class="text-center py-12">
        <div class="text-6xl mb-4">📝</div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Nenhum post encontrado</h2>
        <p class="text-gray-600 dark:text-gray-300">Ainda não há posts publicados.</p>
      </div>
      
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <DevtoPostsCarousel
          v-for="post in posts"
          :key="post.slug"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DevtoPostsCarousel from '~/components/DevtoPostsCarousel.vue'
import { usePosts } from '~/composables/usePosts'

const { posts, isLoading } = usePosts()

// Meta tags para SEO
useHead({
  title: 'Everton Tenorio | Blog - Todos os Posts',
  meta: [
    { name: 'description', content: 'Todos os posts do blog sobre desenvolvimento e tecnologia' }
  ]
})
</script>
