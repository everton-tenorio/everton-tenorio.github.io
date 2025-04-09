<template>
  <div class="w-full">
    <div class="lg:mx-[-20px] lg:mt-[-10px] mt-5 mb-5">
      <span class="text-[gray] px-1.5 py-1 font-[Ubuntu]">
        <FontAwesomeIcon icon="fa-brands fa-dev" class="text-4xl text-white" />
      </span>

      <div
        ref="carousel"
        class="mt-2 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      >
        <div
          v-for="(post, index) in posts"
          :key="index"
          @click="openLink(post.url)"
          class="flex-shrink-0 w-64 md:w-70 h-45 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition snap-start cursor-pointer"
        >
          <img :src="post.social_image" alt="Imagem do Post" class="w-full h-28 object-cover" />
          <div class="p-3">
            <h3 class="text-sm font-semibold line-clamp-2">{{ post.title }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ post.readable_publish_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

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

// Lógica da animação no desktop
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const carousel = ref(null)

const startDrag = (e) => {
  isDragging.value = true
  startX.value = e.pageX - carousel.value.offsetLeft
  scrollLeft.value = carousel.value.scrollLeft
}

const onDrag = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.pageX - carousel.value.offsetLeft
  const walk = (x - startX.value) * 1.4 // Ajuste da velocidade da animação
  carousel.value.scrollLeft = scrollLeft.value - walk
}

const stopDrag = () => {
  isDragging.value = false
}

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
