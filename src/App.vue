<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/main/vHeader.vue'
import Main from './components/main/vMain.vue'
import Footer from './components/main/vFooter.vue'
import { ref, watch } from 'vue'

const toggle = ref(true)
const theme = ref('light')

watch(toggle, () => {
  toggle.value ? theme.value = 'dark' : theme.value = 'light'
},)

</script>

<template>
  <div class="page" :data-theme="theme">
<!--    <button @click="toggle = !toggle">123</button>-->
<!--    {{ toggle }}-->
<!--    {{ theme }}-->
    <Header />
    <Main />
    <Footer />
  </div>
<!--  <HelloWorld msg="Vite + Vue" />-->
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}
</style>
