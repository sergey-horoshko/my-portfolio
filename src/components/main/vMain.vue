<script setup>
import About from '../sections/vAbout.vue'
import Contact from '../sections/vContact.vue'
import Home from '../sections/vHome.vue'
import Project from '../sections/vProject.vue'
</script>

<template>
  <main>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
  </main>
</template>

<style>
main {
  flex-grow: 1;
  min-height: 100vh;
}
</style>
