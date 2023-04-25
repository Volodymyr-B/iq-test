<script setup>
const { progress } = defineProps(["progress"]);
</script>

<template>
  <div class="container">
    <div class="line">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 15px;
}
.line {
  background-color: var(--color-disabled);
  border-radius: 15px;
  margin: 0 30px 0 30px;
}
.progress {
  height: 10px;
  background-color: var(--color-success);
  border-radius: 15px;
}
</style>
