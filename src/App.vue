<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView />
  <footer>
    <Footer/>
  </footer>
</template>

<style>
@import '@/assets/index.css';
</style>
