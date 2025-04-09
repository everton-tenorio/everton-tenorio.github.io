<template>
    <aside class="w-full md:w-64 p-4 bg-gray-0 rounded-xl shadow-md">
      <img
        class="w-24 h-24 rounded-full mx-auto"
        src="https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1142629%2Fc5dca76a-98f6-4f9f-8d94-c8ee971c89e8.jpg"
        alt="Foto de Perfil"
      />
      <h2 class="text-center mt-4 text-xl font-bold text-white font-[Ubuntu]">Everton Tenorio</h2>
      <p class="text-center text-gray-600">DevOps | Software Enginner</p>
  
      <div class="mt-4 text-sm text-gray-700 flex flex-col gap-2">
        <div class="flex items-center justify-between md:justify-start">
          <span class="flex items-center ml-5 md:ml-0 lg:ml-0 text-[1rem] md:text-[0.9rem]">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" class="md:ml-6 mr-2 text-gray-500" />
            Brasil
          </span>
          <div class="flex items-center mr-2 md:gap-3 gap-8 md:ml-8">
            <a href="https://github.com/everton-tenorio" class="flex items-center">
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                class="text-gray-500 text-xl md:text-base bg-gray-200 md:bg-[transparent] p-2 md:p-0 rounded-full hover:bg-gray-300 md:hover:bg-transparent transition-colors"
              />
            </a>
            <a href="https://dev.to/evertontenorio" class="flex items-center">
              <FontAwesomeIcon
                icon="fa-brands fa-dev"
                class="text-gray-500 text-xl md:text-base bg-gray-200 md:bg-transparent p-2 md:p-0 rounded-full hover:bg-gray-300 md:hover:bg-transparent transition-colors"
              />
            </a>
            <a href="https://dev.to/evertontenorio" class="flex items-center">
              <FontAwesomeIcon
                icon="fa-brands fa-telegram"
                class="text-gray-500 text-xl md:text-base bg-gray-200 md:bg-transparent p-2 md:p-0 rounded-full hover:bg-gray-300 md:hover:bg-transparent transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
<script setup>
  //
</script>