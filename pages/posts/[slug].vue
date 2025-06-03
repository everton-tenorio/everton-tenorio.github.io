<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="error" class="max-w-4xl mx-auto px-4 py-16 text-center">
      <div class="text-6xl mb-6">❌</div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Erro ao carregar o post</h1>
      <p class="text-gray-600 mb-8">{{ error }}</p>
      <NuxtLink 
        to="/posts" 
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Voltar aos posts
      </NuxtLink>
    </div>
    
    <div v-else-if="!post" class="max-w-4xl mx-auto px-4 py-16 text-center">
      <div class="text-6xl mb-6">🔍</div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
      <p class="text-gray-600 mb-8">O post que você procura não existe ou foi removido.</p>
      <NuxtLink 
        to="/posts" 
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Ver todos os posts
      </NuxtLink>
    </div>
    
    <article v-else class="bg-white">
      <!-- Banner Image -->
      <div v-if="post.bannerImage" class="w-full h-64 md:h-96 overflow-hidden">
        <img
          :src="post.bannerImage"
          :alt="post.title"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Content -->
      <div class="max-w-4xl mx-auto px-4 py-12 md:px-8">
        <!-- Header -->
        <header class="mb-12">
          <div class="mb-6">
            <NuxtLink 
              to="/posts" 
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
            >
              ← Voltar aos posts
            </NuxtLink>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {{ post.title }}
          </h1>
          
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-gray-200">
            <time 
              :datetime="post.date"
              class="flex items-center text-gray-600 font-medium"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {{ formattedDate }}
            </time>
            
            <div v-if="post.tags?.length" class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </header>
        
        <!-- Article Content -->
        <div class="prose prose-lg prose-gray max-w-none">
          <div v-html="post.content"></div>
        </div>
        
        <!-- Footer -->
        <footer class="mt-16 pt-8 border-t border-gray-200 bg-[white]">
          <div class="flex justify-between items-center">
            <NuxtLink 
              to="/posts" 
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Posts
            </NuxtLink>
            
            <div class="text-sm text-gray-500">
              Publicado em {{ formattedDate }}
            </div>
          </div>
        </footer>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { usePosts } from '~/composables/usePosts'
import type { Post } from '~/composables/usePosts'

const route = useRoute()
const slugParam = route.params.slug as string
const { posts } = usePosts()

const post = computed<Post | undefined>(() =>
  posts.value.find(p => p.slug === slugParam)
)

const error = computed(() => {
  if (!slugParam) {
    return 'Slug do post não encontrado'
  }
  return null
})

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  
  try {
    return format(new Date(post.value.date), "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR
    })
  } catch (err) {
    console.warn('Erro ao formatar data:', post.value.date)
    return post.value.date
  }
})

// Meta tags dinâmicas
useHead(() => ({
  title: post.value 
    ? `${post.value.title} | Meu Blog`
    : 'Post não encontrado | Meu Blog',
  meta: post.value ? [
    { name: 'description', content: post.value.description },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:type', content: 'article' },
    {
      property: 'og:image',
      content: post.value.bannerImage || '/og-default.png'
    },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: post.value.title },
    { property: 'twitter:description', content: post.value.description }
  ] : [
    { name: 'description', content: 'Post não encontrado' }
  ]
}))

// Se o post não existe, retorna 404
if (process.client && !post.value && posts.value.length > 0) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post não encontrado'
  })
}
</script>

<style>
/* Estilos melhorados para o conteúdo */
.prose {
  @apply text-gray-800;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply text-gray-900 font-bold;
}

.prose h1 {
  @apply text-3xl mb-6 mt-8;
}

.prose h2 {
  @apply text-2xl mb-4 mt-8;
}

.prose h3 {
  @apply text-xl mb-3 mt-6;
}

.prose p {
  @apply mb-6 leading-relaxed;
}

.prose a {
  @apply text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-600/30 hover:decoration-blue-600;
}

.prose pre {
  @apply bg-gray-100 text-gray-800 rounded-lg px-6 py-4 overflow-x-auto border border-gray-200;
}

.prose code {
  @apply bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono;
}

.prose pre code {
  @apply bg-transparent text-gray-800 px-0 py-0;
}

.prose img {
  @apply my-8 rounded-lg shadow-lg border border-gray-200 max-w-full h-auto;
}

.prose blockquote {
  @apply border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg my-6 italic text-gray-700;
}

.prose ul,
.prose ol {
  @apply text-gray-700 space-y-2;
}

.prose li {
  @apply leading-relaxed;
}

.prose strong {
  @apply text-gray-900 font-semibold;
}

.prose em {
  @apply text-gray-700;
}

.prose hr {
  @apply border-gray-300 my-8;
}

.prose table {
  @apply border-collapse border border-gray-300 my-6;
}

.prose th,
.prose td {
  @apply border border-gray-300 px-4 py-2;
}

.prose th {
  @apply bg-gray-100 font-semibold;
}

iframe {
display: block;
margin: auto;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 30px;
}
</style>