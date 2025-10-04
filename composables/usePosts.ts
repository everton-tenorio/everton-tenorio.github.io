// composables/usePosts.ts
import { ref, readonly } from 'vue'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

// Polyfill Buffer para gray-matter
if (process.client) {
  const { Buffer } = await import('buffer')
  if (typeof globalThis !== 'undefined') {
    globalThis.Buffer = Buffer
  }
}

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
  bannerImage?: string
  content: string
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true
})

const posts = ref<Post[]>([])
const isLoading = ref(false)
const isInitialized = ref(false)

async function loadPosts() {
  if (isInitialized.value || isLoading.value) return
  
  isLoading.value = true
  
  try {
    const modules = import.meta.glob('/content/*.md', {
      query: '?raw',
      import: 'default'
    })
    
    const postPromises = Object.entries(modules).map(async ([path, loader]) => {
      const rawContent = await loader() as string
      const { data: frontmatter, content: markdownBody } = matter(rawContent)
      const fileName = path.split('/').pop()?.replace('.md', '') || ''
      const slug = frontmatter.slug || fileName
      
      return {
        slug: String(slug),
        title: String(frontmatter.title || 'Sem título'),
        date: String(frontmatter.date || new Date().toISOString()),
        description: String(frontmatter.description || ''),
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        bannerImage: frontmatter.bannerImage ? String(frontmatter.bannerImage) : undefined,
        content: md.render(markdownBody)
      }
    })
    
    const loadedPosts = await Promise.all(postPromises)
    
    // Ordena por data decrescente
    loadedPosts.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
    
    posts.value = loadedPosts
    isInitialized.value = true
  } catch (error) {
    console.error('Erro ao carregar posts:', error)
  } finally {
    isLoading.value = false
  }
}

// Função para buscar um post específico por slug
export function getPostBySlug(slug: string): Post | undefined {
  return posts.value.find(post => post.slug === slug)
}

export function usePosts() {
  // Sempre carrega os posts se ainda não foram carregados
  if (!isInitialized.value && !isLoading.value) {
    loadPosts()
  }
  
  return {
    posts: readonly(posts),
    isLoading: readonly(isLoading),
    isInitialized: readonly(isInitialized),
    refresh: loadPosts,
    getPostBySlug
  }
}