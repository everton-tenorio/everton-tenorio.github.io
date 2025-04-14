<template>
  <div class="min-h-screen text-gray-900 bg-[#000000]">
    <header class="p-4 lg:p-4 bg-black shadow-sm sticky top-0 z-50"> <!--border-b-->
      <h1 class="text-xl font-bold text-[black]">Portfolio</h1>
    </header>

    <main>
      <slot />
    </main>

    <!--<footer class="text-center py-6 text-sm text-gray-500">
      Everton Tenorio 💻 — {{ new Date().getFullYear() }}
    </footer>-->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
</style>
