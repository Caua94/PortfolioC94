<template>
  <div class="fixed top-0 w-full bg-black text-white z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between font-serif">

      <img class="w-16 h-16 sm:w-24 sm:h-24" src="../assets/img/logo.png" alt="Logo" />

      <nav class="hidden md:flex flex-1 justify-center">
        <ul class="flex gap-6 lg:gap-8 font-semibold text-base lg:text-xl">
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/">Home</router-link></li>
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/sobre">About me</router-link></li>
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/metas">Goal</router-link></li>
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/portifolio">Portfolio</router-link></li>
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/personal">Personal</router-link></li>
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>

      <div class="hidden sm:flex gap-4 items-center">
        <a target="_blank" href="https://www.instagram.com/caua94_rd/" class="transition duration-300 ease-in-out hover:scale-105">
          <img src="../assets/img/instagram.png" class="w-6 h-6 sm:w-8 sm:h-8" alt="Instagram" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/cauazin94" class="transition duration-300 ease-in-out hover:scale-105">
          <img src="../assets/img/linkedin.png" class="w-6 h-6 sm:w-8 sm:h-8" alt="LinkedIn" />
        </a>
        <a target="_blank" href="https://github.com/Caua94" class="transition duration-300 ease-in-out hover:scale-105">
          <img src="../assets/img/github.png" class="w-6 h-6 sm:w-8 sm:h-8" alt="GitHub" />
        </a>
      </div>

      <div class="md:hidden">
        <menuComponent/>
      </div>

    </div>
  </div>
</template>

<script setup>
import menuComponent from '../components/menuComponent.vue';

</script>
