<!-- File: components/DevtoPostsCarousel.vue -->
<template>
  <NuxtLink
    v-if="post?.slug"
    :to="`/posts/${post.slug}`"
    class="group block relative overflow-hidden rounded-2xl aspect-[16/9] shadow-lg hover:shadow-2xl transition-all duration-500"
  >
    <!-- Imagem de fundo -->
    <div class="absolute inset-0">
      <img
        v-if="post.bannerImage"
        :src="post.bannerImage"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <!-- Fallback caso não tenha imagem -->
      <div
        v-else
        class="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
      />
    </div>

    <!-- Overlay com gradiente -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />

    <!-- Conteúdo -->
    <div class="absolute inset-0 flex flex-col justify-end p-6">
      <h2 class="text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
        {{ post.title }}
      </h2>
      <p class="text-sm text-gray-200 font-medium">
        {{ formatDate(post.date) }}
      </p>
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
</style>