<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <div class="page_container">
    <RouterView />
  </div>
</template>

<style scoped>
.page_container {
  height: calc(100vh - 50px);
}
</style>
