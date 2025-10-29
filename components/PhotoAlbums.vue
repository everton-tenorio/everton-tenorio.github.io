<!-- components/PhotoAlbums.vue -->
<template>
  <div class="bg-black py-20 px-4 mb-[-50px]">
    <div class="max-w-7xl mx-auto">
      <!-- Header 
      <div class="mb-12 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Projects Gallery
        </h2>
        <p class="text-gray-400 text-lg">
          Explore visual stories from my work
        </p>
      </div>-->

      <!-- Albums Grid - Masonry Style -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <div
          v-for="(album, index) in albums"
          :key="album.id"
          @click="openAlbum(index)"
          class="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:scale-[1.02]"
          :class="album.size"
          :style="{ aspectRatio: album.ratio }"
        >
          <!-- Image -->
          <img
            :src="album.cover"
            :alt="album.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="text-white font-bold text-lg md:text-xl mb-1">
                {{ album.title }}
              </h3>
              <p class="text-gray-300 text-sm mb-2">
                {{ album.description }}
              </p>
              <div class="flex items-center gap-2 text-xs text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ album.images.length }} photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          @click="closeModal"
        >
          <div class="relative w-full max-w-6xl" @click.stop>
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- Album Title -->
            <div class="mb-6 text-center">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">
                {{ currentAlbum?.title }}
              </h3>
              <p class="text-gray-400">
                {{ currentAlbum?.description }}
              </p>
            </div>

            <!-- Main Image -->
            <div class="relative bg-gray-900 rounded-lg overflow-hidden mb-4 aspect-video">
              <img
                :src="currentAlbum?.images[currentImageIndex]"
                :alt="`Image ${currentImageIndex + 1}`"
                class="w-full h-full object-contain"
              />
              
              <!-- Navigation Arrows -->
              <button
                v-if="currentImageIndex > 0"
                @click="prevImage"
                class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <button
                v-if="currentImageIndex < (currentAlbum?.images.length || 0) - 1"
                @click="nextImage"
                class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              <!-- Image Counter -->
              <div class="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-mono">
                {{ currentImageIndex + 1 }} / {{ currentAlbum?.images.length }}
              </div>
            </div>

            <!-- Thumbnails -->
            <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <div
                v-for="(image, index) in currentAlbum?.images"
                :key="index"
                @click="currentImageIndex = index"
                class="flex-shrink-0 cursor-pointer transition-all duration-300 rounded overflow-hidden"
                :class="currentImageIndex === index ? 'ring-2 ring-white scale-105' : 'opacity-50 hover:opacity-100'"
              >
                <img
                  :src="image"
                  :alt="`Thumbnail ${index + 1}`"
                  class="w-20 h-20 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Album {
  id: number
  title: string
  description: string
  cover: string
  images: string[]
  size: string
  ratio: string
}

const isModalOpen = ref(false)
const currentAlbumIndex = ref(0)
const currentImageIndex = ref(0)

// Álbuns com imagens públicas do Unsplash
const albums = ref<Album[]>([
  {
    id: 1,
    title: '24/25 - Building',
    description: 'posto mais em breve',
    cover: 'https://i.ibb.co/d4HKMHvq/IMG-20251004-221443-478.jpg',
    images: [
      'https://i.ibb.co/d4HKMHvq/IMG-20251004-221443-478.jpg',
      'https://i.ibb.co/p6mpg0Rn/daa92e70-ab80-4f4d-abc6-63b764433093-20251005-223102-0000.jpg',
      'https://i.ibb.co/1JMBwVzn/d1f81d38-cebb-4610-a3a5-7e5631f33258-20251005-222330-0000.jpg',
      'https://i.ibb.co/0ySXb7WF/IMG-20251005-150609-083.jpg'
    ],
    size: 'col-span-2 row-span-2',
    ratio: '1/1'
  },
  /*{
    id: 2,
    title: 'Web Development',
    description: 'Vue.js & Nuxt Projects',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200&q=80'
    ],
    size: '',
    ratio: '4/3'
  },
  {
    id: 3,
    title: 'DevOps Pipeline',
    description: 'CI/CD & Automation',
    cover: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80',
      'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=1200&q=80',
      'https://images.unsplash.com/photo-1667372335937-d03be6fb0a9c?w=1200&q=80',
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&q=80'
    ],
    size: '',
    ratio: '4/3'
  },*/
  {
    id: 2,
    title: 'Campus Party São Paulo - 2019',
    description: 'CPBR12',
    cover: 'https://i.ibb.co/bgHJHFLd/IMG-20190216-112522.jpg',
    images: [
        'https://i.ibb.co/Kxy1xtnH/IMG-20251005-012559-866.webp',
        'https://i.ibb.co/GfSZ3Mwg/IMG-20190214-165324.jpg',
        'https://i.ibb.co/ccj5nvPy/IMG-20190214-150438.jpg',
        'https://i.ibb.co/4R9HfFrg/IMG-20190216-120216.jpg',
        'https://i.ibb.co/bgHJHFLd/IMG-20190216-112522.jpg',
        'https://i.ibb.co/kVRHkPh1/IMG-20190214-212141.jpg',
        'https://i.ibb.co/WWhpQLk2/IMG-20190213-102603.jpg',
        'https://i.ibb.co/zhSyZh26/5a3fd763-7f1c-4584-a0a2-2ed1fc5a451d-20251028-211905-0000-1.jpg',
        'https://i.ibb.co/XfwT7fbc/IMG-20190213-124719.jpg',
        'https://i.ibb.co/G4fSZ31N/IMG-20190211-092743.jpg',
        'https://i.ibb.co/0yvbKPhM/IMG-20190213-122003.jpg',
        'https://i.ibb.co/j90CsX3G/IMG-20190213-134152.jpg'
    ],
    size: 'md:col-span-2',
    ratio: '3/4'
  },
  {
    id: 3,
    title: 'Campus Party Natal - 2018',
    description: 'CPBR11',
    cover: 'https://i.ibb.co/NdP51wvk/IMG-20180411-200612.jpg',
    images: [
      'https://i.ibb.co/NdP51wvk/IMG-20180411-200612.jpg',
      'https://i.ibb.co/q3KcwBsJ/48-C7740-E-2022-4-F5-B-902-F-853-D273-BA1-CC.jpg',
      'https://i.ibb.co/kss4Z3H0/4-E838-B78-40-D6-4249-BA79-EC53-F55-D25-F9.jpg',
    ],
    size: '',
    ratio: '3/4'
  },
])

const currentAlbum = computed(() => albums.value[currentAlbumIndex.value])

const openAlbum = (index: number) => {
  currentAlbumIndex.value = index
  currentImageIndex.value = 0
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentImageIndex.value < (currentAlbum.value?.images.length || 0) - 1) {
    currentImageIndex.value++
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!isModalOpen.value) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

if (process.client) {
  window.addEventListener('keydown', handleKeydown)
}
</script>

<style scoped>
/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Scrollbar */
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #1a1a1a;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #4a4a4a;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #5a5a5a;
}
</style>