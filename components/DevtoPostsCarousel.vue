<template>
  <div class="w-full relative">
    <div class="lg:mt-8 mt-10 mb-5">
      <span class="text-gray-500 px-1.5 py-1 font-[Ubuntu]">
        <FontAwesomeIcon icon="fa-brands fa-dev" class="text-4xl text-white" />
      </span>

      <div
        ref="carousel"
        class="mt-2 ml-[5px] flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none cursor-grab active:cursor-grabbing relative"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @scroll="handleScroll"
      >
        <div
          v-for="(post, index) in posts"
          :key="index"
          @click="openLink(post.url)"
          class="flex-shrink-0 w-64 md:w-[280px] h-45 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition snapミニstart cursor-pointer relative"
        >
          <img :src="post.social_image" alt="Imagem do Post" class="w-full h-28 object-cover" />
          <div class="p-3">
            <h3 class="text-sm font-semibold line-clamp-2">{{ post.title }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ post.readable_publish_date }}</p>
          </div>
        </div>
      </div>

      <!-- Ícones de navegação -->
      <button
        v-if="showLeftArrow"
        class="hidden lg:block absolute left-[-15px] top-1/2 -translate-y-2 border border-[gray] rounded-md hover:text-gray-600 p-2 shadow-md z-10 bg-gray-100 hover:bg-gray-300 transition"
        @click="scrollToLeft"
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" class="text-gray-600" />
      </button>
      <button
        v-if="showRightArrow"
        class="hidden lg:block absolute right-[-15px] top-1/2 -translate-y-2 border border-[gray] rounded-md hover:text-gray-600 p-2 shadow-md z-10 bg-gray-100 hover:bg-gray-300 transition"
        @click="scrollToRight"
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-gray-600" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const posts = ref([])
const carousel = ref(null)
const showLeftArrow = ref(false)
const showRightArrow = ref(true)
const isDragging = ref(false)
const startX = ref(0)
const dragScrollLeft = ref(0)

const fetchPosts = async () => {
  try {
    const response = await fetch("https://dev.to/api/articles?username=evertontenorio")
    const data = await response.json()
    posts.value = data.slice(0, 5)
  } catch (error) {
    console.error("Erro [dev.to]:", error)
  }
}

const openLink = (url) => {
  window.open(url, "_blank")
}

const handleScroll = () => {
  if (!carousel.value) return
  const { scrollLeft, scrollWidth, clientWidth } = carousel.value
  showLeftArrow.value = scrollLeft > 0
  showRightArrow.value = scrollWidth > clientWidth && scrollLeft < scrollWidth - clientWidth
}

const scrollToLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -carousel.value.clientWidth / 2, behavior: 'smooth' })
  }
}

const scrollToRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: carousel.value.clientWidth / 2, behavior: 'smooth' })
  }
}

const startDrag = (e) => {
  isDragging.value = true
  startX.value = e.pageX - carousel.value.offsetLeft
  dragScrollLeft.value = carousel.value.scrollLeft
}

const onDrag = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.pageX - carousel.value.offsetLeft
  const walk = (x - startX.value) * 1.4
  carousel.value.scrollLeft = dragScrollLeft.value - walk
}

const stopDrag = () => {
  isDragging.value = false
}

onMounted(async () => {
  await fetchPosts()
  await nextTick() // Esperar o DOM estar completamente renderizado
  handleScroll() // Verificar estado inicial dos botões
})
</script>

<style scoped>
/**/
</style>