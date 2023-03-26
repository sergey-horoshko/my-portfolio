<script setup>
import Header from './components/main/vHeader.vue'
import Main from './components/main/vMain.vue'
import Footer from './components/main/vFooter.vue'
import { projectTheme } from './store/theme.js'

const store = projectTheme()
</script>

<template>
  <div class="page" :data-theme="store.checkTheme">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}
</style>
