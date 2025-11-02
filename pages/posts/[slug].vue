<!-- pages/posts/[slug].vue -->
<template>
  <div :class="['min-h-screen transition-colors duration-200', isDarkMode ? 'bg-gray-800' : 'bg-gray-50']">
    <!-- Loading -->
    <div v-if="isLoading" class="max-w-4xl mx-auto px-4 py-16 text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      <p :class="isDarkMode ? 'mt-4 text-gray-300' : 'mt-4 text-gray-600'">Carregando post...</p>
    </div>

    <!-- Erro -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 py-16 text-center">
      <div class="text-6xl mb-6">❌</div>
      <h1 :class="['text-3xl font-bold mb-4', isDarkMode ? 'text-white' : 'text-gray-900']">
        Erro ao carregar o post
      </h1>
      <p :class="isDarkMode ? 'text-gray-300 mb-8' : 'text-gray-600 mb-8'">{{ error }}</p>
      <NuxtLink 
        to="/posts" 
        class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
      ← Voltar
      </NuxtLink>
    </div>
    
    <!-- Post não encontrado -->
    <div v-else-if="!post && isInitialized" class="max-w-4xl mx-auto px-4 py-16 text-center">
      <div class="text-6xl mb-6">🔍</div>
      <h1 :class="['text-3xl font-bold mb-4', isDarkMode ? 'text-white' : 'text-gray-900']">
        Post não encontrado
      </h1>
      <p :class="isDarkMode ? 'text-gray-300 mb-8' : 'text-gray-600 mb-8'">
        O post que você procura não existe ou foi removido.
      </p>
      <NuxtLink 
        to="/posts" 
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Ver todos os posts
      </NuxtLink>
    </div>
    
    <!-- Post encontrado -->
    <article v-else-if="post" :class="['transition-colors duration-200', isDarkMode ? 'article-dark' : 'article-light']">
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
          <div class="mb-6 flex justify-between items-center">
            <NuxtLink 
              to="/posts" 
              class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Voltar
            </NuxtLink>
            
            <!-- Botão Dark Mode Toggle -->
            <button
              @click="toggleDarkMode"
              :class="[
                'p-2 rounded-lg transition-all duration-200 flex items-center gap-2',
                isDarkMode 
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
              :title="isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'"
            >
              <!-- Ícone Sol (modo claro) -->
              <svg v-if="!isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <!-- Ícone Lua (modo escuro) -->
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </button>
          </div>
          
          <h1 :class="[
            'text-4xl md:text-5xl font-bold mb-6 leading-tight',
            isDarkMode ? 'text-white' : 'text-gray-900'
          ]">
            {{ post.title }}
          </h1>
          
          <div :class="[
            'flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b',
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          ]">
            <time 
              :datetime="post.date"
              :class="[
                'flex items-center font-medium',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              ]"
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
                :class="[
                  'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                  isDarkMode 
                    ? 'bg-gray-700 text-blue-300' 
                    : 'bg-blue-100 text-blue-800'
                ]"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </header>
        
        <!-- Article Content -->
        <div 
          :class="[
            'prose prose-lg max-w-none',
            isDarkMode ? 'prose-dark' : 'prose-light'
          ]"
        >
          <div v-html="post.content"></div>
        </div>
        
        <!-- Footer -->
        <footer :class="[
          'mt-16 pt-8 border-t',
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        ]">
          <div class="flex justify-between items-center">
            <NuxtLink 
              to="/posts" 
              class="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Posts
            </NuxtLink>
            
            <div :class="['text-sm', isDarkMode ? 'text-gray-400' : 'text-gray-500']">
              Publicado em {{ formattedDate }}
            </div>
          </div>
        </footer>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { usePosts } from '~/composables/usePosts'
import type { Post } from '~/composables/usePosts'

const route = useRoute()
const slugParam = route.params.slug as string
const { posts, isLoading, isInitialized } = usePosts()

// Dark mode state
const isDarkMode = ref(false)

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

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', isDarkMode.value.toString())
  }
}

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

onMounted(() => {
  // Carrega preferência de dark mode
  if (typeof window !== 'undefined') {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      isDarkMode.value = savedMode === 'true'
    }
  }

  nextTick(() => {
    // Desabilita as crases de TODO código
    const styleTag = document.createElement('style')
    styleTag.textContent = `
      .prose code::before,
      .prose code::after {
        content: none !important;
      }
    `
    document.head.appendChild(styleTag)
  })
})
</script>

<style scoped>
.article-dark {
  background: #1f2123;
}
/* Modo Claro */
.prose-light {
  @apply text-gray-800;
}

.prose-light :deep(h1),
.prose-light :deep(h2),
.prose-light :deep(h3),
.prose-light :deep(h4),
.prose-light :deep(h5),
.prose-light :deep(h6) {
  @apply text-gray-900 font-bold;
}

.prose-light :deep(h1) { @apply text-3xl mb-6 mt-8; }
.prose-light :deep(h2) { @apply text-2xl mb-4 mt-8; }
.prose-light :deep(h3) { @apply text-xl mb-3 mt-6; }
.prose-light :deep(p) { @apply mb-6 leading-relaxed text-gray-700; }

.prose-light :deep(a) {
  @apply text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-600/30 hover:decoration-blue-600;
}

.prose-light :deep(pre) {
  @apply bg-gray-100 text-gray-800 rounded-lg px-6 py-4 overflow-x-auto border border-gray-200;
}

.prose-light :deep(code) {
  @apply bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono;
}

.prose-light :deep(pre code) {
  @apply bg-transparent text-gray-800 px-0 py-0;
}

.prose-light :deep(blockquote) {
  @apply border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 rounded-r-lg my-6 italic text-gray-700;
}

.prose-light :deep(strong) { @apply text-gray-900 font-semibold; }
.prose-light :deep(em) { @apply text-gray-700; }

.prose-light :deep(ul),
.prose-light :deep(ol) {
  @apply text-gray-700 space-y-2;
}

.prose-light :deep(img) {
  @apply my-8 rounded-lg shadow-lg border border-gray-200 max-w-full h-auto;
}

.prose-light :deep(hr) { @apply border-gray-300 my-8; }

.prose-light :deep(table) {
  @apply border-collapse border border-gray-300 my-6;
}

.prose-light :deep(th),
.prose-light :deep(td) {
  @apply border border-gray-300 px-4 py-2;
}

.prose-light :deep(th) {
  @apply bg-gray-100 font-semibold text-gray-900;
}

/* Modo Escuro */
.prose-dark {
  @apply text-gray-200;
}

.prose-dark :deep(h1),
.prose-dark :deep(h2),
.prose-dark :deep(h3),
.prose-dark :deep(h4),
.prose-dark :deep(h5),
.prose-dark :deep(h6) {
  @apply text-white font-bold;
}

.prose-dark :deep(h1) { @apply text-3xl mb-6 mt-8; }
.prose-dark :deep(h2) { @apply text-2xl mb-4 mt-8; }
.prose-dark :deep(h3) { @apply text-xl mb-3 mt-6; }
.prose-dark :deep(p) { @apply mb-6 leading-relaxed text-gray-300; }

.prose-dark :deep(a) {
  @apply text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 hover:decoration-blue-400;
}

.prose-dark :deep(pre) {
  @apply bg-gray-900 text-gray-200 rounded-lg px-6 py-4 overflow-x-auto border border-gray-700;
}

.prose-dark :deep(code) {
  @apply bg-gray-900 text-red-400 px-2 py-1 rounded text-sm font-mono;
}

.prose-dark :deep(pre code) {
  @apply bg-transparent text-gray-200 px-0 py-0;
}

.prose-dark :deep(blockquote) {
  @apply border-l-4 border-blue-500 pl-6 py-2 bg-gray-900/50 rounded-r-lg my-6 italic text-gray-300;
}

.prose-dark :deep(strong) { @apply text-white font-semibold; }
.prose-dark :deep(em) { @apply text-gray-300; }

.prose-dark :deep(ul),
.prose-dark :deep(ol) {
  @apply text-gray-300 space-y-2;
}

.prose-dark :deep(img) {
  @apply my-8 rounded-lg shadow-lg border border-gray-700 max-w-full h-auto;
}

.prose-dark :deep(hr) { @apply border-gray-600 my-8; }

.prose-dark :deep(table) {
  @apply border-collapse border border-gray-600 my-6;
}

.prose-dark :deep(th),
.prose-dark :deep(td) {
  @apply border border-gray-600 px-4 py-2;
}

.prose-dark :deep(th) {
  @apply bg-gray-900 font-semibold text-white;
}

/* Estilos gerais */
:deep(iframe) {
  display: block;
  margin: auto;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  padding-top: 10px;
}

:deep(.imgcrd) {
  margin-left: 25%;
  margin-right: 25%;
  display: flex;
  justify-content: center;
}

/* Mobile */
@media only screen and (max-width: 600px) {
  :deep(iframe) {
    width: 100%;
    height: 350px;
  }

  .prose-light :deep(pre) {
    @apply bg-gray-900;
  }
  
  .prose-light :deep(pre code) {
    @apply text-green-400;
    white-space: break-spaces;
  }

  .prose-dark :deep(pre code) {
    white-space: break-spaces;
  }

  :deep(code) {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-bottom: -5px;
    padding-bottom: 0px;
    padding-top: 0px;
  }
}
</style>