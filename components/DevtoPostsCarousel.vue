<!-- File: components/DevtoPostsCarousel.vue -->
<template>
  <NuxtLink
    v-if="post?.slug"
    :to="`/posts/${post.slug}`"
    class="group block bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
  >
    <div v-if="post.bannerImage" class="h-32 overflow-hidden">
      <img
        :src="post.bannerImage"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {{ post.title }}
      </h2>
      <p class="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
        {{ formatDate(post.date) }}
      </p>
      <p class="text-gray-600 dark:text-gray-300 text-base line-clamp-3 leading-relaxed">
        {{ post.description }}
      </p>
      <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in post.tags.slice(0, 3)"
          :key="tag"
          class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { Post } from '~/composables/usePosts'

interface Props {
  post: Post
}

defineProps<Props>()

const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), "dd 'de' MMM, yyyy", { locale: ptBR })
  } catch (error) {
    console.warn('Erro ao formatar data:', dateString)
    return dateString
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>