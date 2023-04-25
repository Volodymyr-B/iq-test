<script setup>
const { response, userData } = defineProps(["response", "userData"]);
</script>

<template>
  <div class="answer">
    <div>
      <div>name: {{ response.name }}</div>
      <div>height: {{ response.height }}</div>
      <div>mass: {{ response.mass }}</div>
      <div>hair color: {{ response.hair_color }}</div>
    </div>
    <div>
      <div v-for="value in Object.values(userData)">{{ value }}</div>
    </div>
  </div>
</template>

<style scoped>
.answer {
  font-weight: 600;
  display: flex;
  justify-content: center;
  background-color: var(--color-disabled);
  border-radius: 20px;
  padding: 20px;
  color: black;
}
</style>
