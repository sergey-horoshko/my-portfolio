<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main>
    <h1>main</h1>
  </main>
</template>

<style scoped>
main {
  flex-grow: 1;
  min-height: 100vh;
}
</style>
