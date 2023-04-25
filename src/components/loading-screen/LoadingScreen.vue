<script setup>
import LoadingBar from "./LoadingBar.vue";
</script>

<template>
  <div class="loading_container">
    <p>Loading...</p>
    <LoadingBar />
    <p>Defining the style of thinking...</p>
  </div>
</template>

<style scoped>
.loading_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
</style>
