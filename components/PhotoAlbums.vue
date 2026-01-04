<!-- components/PhotoAlbums.vue -->
<template>
  <div class="bg-black py-20 px-4">
    <div class="max-w-7xl mx-auto">
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

            <!-- Main Image Container -->
            <div class="relative bg-gray-900 rounded-lg overflow-hidden mb-4">
              <!-- Image -->
              <div class="aspect-video">
                <img
                  :src="currentImage?.url"
                  :alt="currentImage?.caption || `Image ${currentImageIndex + 1}`"
                  class="w-full h-full object-contain"
                />
              </div>

              <!-- Caption Overlay (aparece sobre a imagem) -->
              <Transition name="caption">
                <div
                  v-if="currentImage?.caption && showCaption"
                  class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 pt-12"
                >
                  <p class="text-white text-sm md:text-base leading-relaxed max-w-3xl">
                    {{ currentImage.caption }}
                  </p>
                  <div v-if="currentImage.location || currentImage.date" class="flex items-center gap-4 mt-3 text-xs text-gray-400">
                    <span v-if="currentImage.location" class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      {{ currentImage.location }}
                    </span>
                    <span v-if="currentImage.date" class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ currentImage.date }}
                    </span>
                  </div>
                </div>
              </Transition>
              
              <!-- Toggle Caption Button (apenas se existir legenda) -->
              <button
                v-if="currentImage?.caption"
                @click="showCaption = !showCaption"
                class="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                :title="showCaption ? 'Ocultar legenda' : 'Mostrar legenda'"
              >
                <svg v-if="!showCaption" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

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
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-mono">
                {{ currentImageIndex + 1 }} / {{ currentAlbum?.images.length }}
              </div>
            </div>

            <!-- Thumbnails -->
            <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              <div
                v-for="(image, index) in currentAlbum?.images"
                :key="index"
                @click="selectImage(index)"
                class="relative flex-shrink-0 cursor-pointer transition-all duration-300 rounded overflow-hidden"
                :class="currentImageIndex === index ? 'ring-2 ring-white scale-105' : 'opacity-50 hover:opacity-100'"
              >
                <img
                  :src="image.url"
                  :alt="image.caption || `Thumbnail ${index + 1}`"
                  class="w-20 h-20 object-cover"
                />
                <!-- Indicador de legenda na thumbnail -->
                <div
                  v-if="image.caption"
                  class="absolute bottom-1 right-1 bg-black/70 rounded-full p-1"
                >
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                  </svg>
                </div>
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

interface ImageData {
  url: string
  caption?: string
  location?: string
  date?: string
}

interface Album {
  id: number
  title: string
  description: string
  cover: string
  images: ImageData[]
  size: string
  ratio: string
}

const isModalOpen = ref(false)
const currentAlbumIndex = ref(0)
const currentImageIndex = ref(0)
const showCaption = ref(true)

// Exemplo de álbuns com legendas
const albums = ref<Album[]>([
  {
    id: 1,
    title: 'building in public',
    description: 'bastidores',
    cover: 'https://i.ibb.co/d4HKMHvq/IMG-20251004-221443-478.jpg',
    images: [
      {
        url: 'https://i.ibb.co/d4HKMHvq/IMG-20251004-221443-478.jpg',
        caption: '',
        location: '',
        date: ''
      },
      {
        url: 'https://i.ibb.co/p6mpg0Rn/daa92e70-ab80-4f4d-abc6-63b764433093-20251005-223102-0000.jpg',
        caption: '',
        location: '',
        date: ''
      },
      {
        url: 'https://i.ibb.co/0ySXb7WF/IMG-20251005-150609-083.jpg',
        caption: 'Aquela clássica, da tela',
        location: '',
        date: ''
      }
    ],
    size: 'col-span-2 row-span-2',
    ratio: '1/1'
  },
  {
    id: 2,
    title: '2025',
    description: 'Transmutation. Mesmas coisas, diferentes formas.',
    cover: 'https://instagram.fcau18-1.fna.fbcdn.net/v/t51.82787-15/608538008_17871313995499597_6849390420379537995_n.webp?_nc_cat=106&ig_cache_key=MzgwMDE2Mzc1NzgyNjQzNTM3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=TiCRd4kc7pgQ7kNvwFXOdfz&_nc_oc=AdnHH4ia6CsnO5z81A2Cl9hjtBLcH0v_CCYDe6TgwDWnAZpyZ4LbTNjfuqPnasSbxj0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau18-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_Afq85u-75gIYejgHhnWkYV6y23_sB8xBITgUCACZp8shnw&oe=695FA60B',
    images: [
      {
        url: 'https://instagram.fcau17-1.fna.fbcdn.net/v/t51.82787-15/608181692_17871313923499597_1214614783177221180_n.webp?_nc_cat=101&ig_cache_key=MzgwMDE2Mzc1NzgwOTYwODAyMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=N-RdFYloBZsQ7kNvwEJ1icD&_nc_oc=AdnJCpwXD4ouWR53Gucgi-oAc2Zhy-a83koI9PMyIYqQMBIaGV9aXt63j9QVS0dHorY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau17-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_Afrh8OvMZh_1k1ezOqnMQCVVsYMUbOnGsTpMziWDLVEaHQ&oe=695F92DB',
        caption: 'agora é portalfut.com',
        location: '',
        date: ''
      },
      {
        url: 'https://instagram.fcau18-1.fna.fbcdn.net/v/t51.82787-15/608237300_17871313932499597_6085642774028009563_n.webp?_nc_cat=103&ig_cache_key=MzgwMDE2Mzc1Nzk3NzQwOTI2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=Vo0rr9xy0TIQ7kNvwF67KhX&_nc_oc=AdlViKiPB1WkOfGUExWwsGOguhSTNi5aBNYp73QtutexpsMnsMHzuJaTSUuvz9xvj4M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau18-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_AfqfUoDJQw3Ak8Tl--1wtcrii8KAhbqeWF979WcqFxMgvg&oe=695FA133',
        caption: ':)',
        location: '',
        date: ''
      },
      {
        url: 'https://i.ibb.co/1JMBwVzn/d1f81d38-cebb-4610-a3a5-7e5631f33258-20251005-222330-0000.jpg',
        caption: 'Algo sobre Redes na rede.',
        location: '',
        date: ''
      },
      {
        url: 'https://instagram.fcau18-1.fna.fbcdn.net/v/t51.82787-15/607499565_17871313959499597_2562320586422259249_n.webp?_nc_cat=111&ig_cache_key=MzgwMDE2Mzc1NzgzNDgwMzI5Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=dUJzsIKbikYQ7kNvwGVdXJk&_nc_oc=Adl6wYQO87-ybNG-1wQbIfu0QHABWxUSROFFYIlVQWgb1mjSYqrY7lXBm2V_FXVSAPs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau18-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_AfqL3lKCIIRJR4BYriUBlE7g_WSV6m7a4qCNyrQFs0crVQ&oe=695FB697',
        caption: 'Na época, lá no Feitosa, tecnologia era fazer "raia" com a palha do coqueiro.',
        location: '',
        date: ''
      },
      {
        url: 'https://instagram.fcau18-1.fna.fbcdn.net/v/t51.82787-15/608397947_17871313968499597_2828485715493993149_n.webp?_nc_cat=108&ig_cache_key=MzgwMDE2Mzc1NzgxODAyMzkxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=01lYuB1RrQUQ7kNvwEQ5OgO&_nc_oc=Admdx03yfIM4hu_XNqc0gJLJhgZkJ0HCzMyN8rA0LfzfoKPwL9lyM4IC6kZChvfWazw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau18-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_AfqAB_1KoDigWJYeyupdpbEP__LJNPEx7BSla2zP6z4FMw&oe=695FABF4',
        caption: 'Amiga da Laika pousando na Lua.',
        location: '',
        date: ''
      },      
      {
        url: 'https://instagram.fcau18-1.fna.fbcdn.net/v/t51.82787-15/607560769_17871313986499597_4044514929876664853_n.webp?_nc_cat=103&ig_cache_key=MzgwMDE2Mzc1NzgxNzk5MzI1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=Gbp_MZo3YfkQ7kNvwEJnlUy&_nc_oc=AdnvV5Nj3tF_u_6cTbKEKVmxY3g7WIjKgyCKxg4r9_NmeJGoaqoY1nxKefiowLv2L1A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau18-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_AfpBaJM-6RT8CTSqO2jvWc3B_12dw1ZTVWgS-iYaJ8o8hQ&oe=695FA5EE',
        caption: 'Na contenção.',
        location: '',
        date: ''
      },
      {
        url: 'https://instagram.fcau18-1.fna.fbcdn.net/v/t51.82787-15/608538008_17871313995499597_6849390420379537995_n.webp?_nc_cat=106&ig_cache_key=MzgwMDE2Mzc1NzgyNjQzNTM3Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=TiCRd4kc7pgQ7kNvwFXOdfz&_nc_oc=AdnHH4ia6CsnO5z81A2Cl9hjtBLcH0v_CCYDe6TgwDWnAZpyZ4LbTNjfuqPnasSbxj0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau18-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_Afq85u-75gIYejgHhnWkYV6y23_sB8xBITgUCACZp8shnw&oe=695FA60B',
        caption: 'menos é mais.',
        location: '',
        date: ''
      },
      {
        url: 'https://instagram.fcau3-1.fna.fbcdn.net/v/t51.82787-15/608869859_17871314004499597_1860025000210258277_n.webp?_nc_cat=100&ig_cache_key=MzgwMDE2Mzc1NzgyNjM5MjU3MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzIifQ%3D%3D&_nc_ohc=G04eYOTlGpEQ7kNvwHltXgI&_nc_oc=Adn90HnfvOSV8XCvUf5cC2WID-QHjIfUUeTMixeVnAqv_7EeOIX3tXjRtrBBdTSzeCU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcau3-1.fna&_nc_gid=RzBUESVGZ7QHnfhQkEcVtA&oh=00_Afo3FZbjFfqb95KF-gEeBBYcc0vlkK-geHZDIaQhOQjAlQ&oe=695FB9C8',
        caption: 'Flamengo.',
        location: '',
        date: ''
      },          
    ],
    size: '',
    ratio: '3/4'
  },
  /*{
    id: 3,
    title: 'DevOps Pipeline',
    description: 'CI/CD & Automation',
    cover: '',
    images: [
      '',
      '',
      '',
      ''
    ],
    size: '',
    ratio: '4/3'
  },*/
  {
    id: 3,
    title: 'Campus Party São Paulo - 2019',
    description: 'CPBR12',
    cover: 'https://i.ibb.co/j90CsX3G/IMG-20190213-134152.jpg',
    images: [
      {
        url: 'https://i.ibb.co/Kxy1xtnH/IMG-20251005-012559-866.webp',
        caption: 'Campus Party',
        location: 'São Paulo',
        date: ''
      },        
      {
        url: 'https://i.ibb.co/GfSZ3Mwg/IMG-20190214-165324.jpg',
        caption: '',
        location: '',
        date: ''
      },     
      {
        url: 'https://i.ibb.co/ccj5nvPy/IMG-20190214-150438.jpg',
        caption: 'Desenvolvendo uma aplicação com k8s e Nodejs',
        location: 'São Paulo',
        date: ''
      },
        
      {
        url: 'https://i.ibb.co/4R9HfFrg/IMG-20190216-120216.jpg',
        caption: '',
        location: '',
        date: ''
      },
        
      {
        url: 'https://i.ibb.co/bgHJHFLd/IMG-20190216-112522.jpg',
        caption: 'A Divina Comédia Tecnológica',
        location: '',
        date: ''
      },
        
      {
        url: 'https://i.ibb.co/kVRHkPh1/IMG-20190214-212141.jpg',
        caption: '',
        location: '',
        date: ''
      },
        
      {
        url: 'https://i.ibb.co/WWhpQLk2/IMG-20190213-102603.jpg',
        caption: 'Expo Center Norte',
        location: 'Vila Guilherme - São Paulo',
        date: ''
      },
        
      {
        url: 'https://i.ibb.co/XfwT7fbc/IMG-20190213-124719.jpg',
        caption: 'O Café e a Economia Paulista',
        location: 'B3 - Praça Antônio Prado - Centro, São Paulo',
        date: ''
      },
        
      {
        url: 'https://i.ibb.co/G4fSZ31N/IMG-20190211-092743.jpg',
        caption: '',
        location: '',
        date: ''
      },
        
      {
        url: 'https://i.ibb.co/0yvbKPhM/IMG-20190213-122003.jpg',
        caption: '',
        location: '',
        date: ''
      },
      {
        url: 'https://i.ibb.co/j90CsX3G/IMG-20190213-134152.jpg',
        caption: 'Selva de pedra',
        location: 'Farol Santander - São Paulo',
        date: ''
      }
    ],
    size: '',
    ratio: '4/3'
  },
  {
    id: 4,
    title: 'Campus Party Natal - 2018',
    description: 'CPBR11',
    cover: 'https://i.ibb.co/NdP51wvk/IMG-20180411-200612.jpg',
    images: [
      {
        url: 'https://i.ibb.co/NdP51wvk/IMG-20180411-200612.jpg',
        caption: 'Primeira Campus',
        location: 'Natal',
        date: ''
      },
      {
        url: 'https://i.ibb.co/q3KcwBsJ/48-C7740-E-2022-4-F5-B-902-F-853-D273-BA1-CC.jpg',
        caption: '',
        location: '',
        date: ''
      },
      {
        url: 'https://i.ibb.co/kss4Z3H0/4-E838-B78-40-D6-4249-BA79-EC53-F55-D25-F9.jpg',
        caption: '',
        location: '',
        date: ''
      }
    ],
    size: '',
    ratio: '4/3'
  },
])

const currentAlbum = computed(() => albums.value[currentAlbumIndex.value])
const currentImage = computed(() => currentAlbum.value?.images[currentImageIndex.value])

const openAlbum = (index: number) => {
  currentAlbumIndex.value = index
  currentImageIndex.value = 0
  showCaption.value = true
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

const selectImage = (index: number) => {
  currentImageIndex.value = index
  showCaption.value = true
}

const nextImage = () => {
  if (currentImageIndex.value < (currentAlbum.value?.images.length || 0) - 1) {
    currentImageIndex.value++
    showCaption.value = true
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
    showCaption.value = true
  }
}

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!isModalOpen.value) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'c' || e.key === 'C') showCaption.value = !showCaption.value
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

/* Caption Transitions */
.caption-enter-active,
.caption-leave-active {
  transition: all 0.4s ease;
}

.caption-enter-from,
.caption-leave-to {
  opacity: 0;
  transform: translateY(20px);
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