<template>
<button @click="toggleMenu" class="md:hidden focus:outline-none">
  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
     d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>
<div v-if="isMenuOpen" class="md:hidden bg-black px-6 pb-6 mt-48 font-serif semibold border shadow-2xl">
  <ul class="flex flex-col gap-2 text-sm pt-4">
    <li><router-link @click="closeMenu" to="/">Home</router-link></li>
    <li><router-link @click="closeMenu" to="/sobre">About me</router-link></li>
    <li><router-link @click="closeMenu" to="/metas">Goal</router-link></li>
    <li><router-link @click="closeMenu" to="/portifolio">Portfolio</router-link></li>
    <li><router-link @click="closeMenu" to="/personal">Personal</router-link></li>
    <li><router-link @click="closeMenu" to="/contact">Contact</router-link></li>
    <button @click="closeMenu" class="rounded text-black bg-gray-200">Close</button>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
