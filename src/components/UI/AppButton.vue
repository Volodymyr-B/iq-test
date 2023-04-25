<script>
export default { name: "app-button" };
</script>

<script setup>
const { isDisabled } = defineProps({
  isDisabled: { default: false },
});
</script>

<template>
  <button :disabled="isDisabled" class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  width: 190px;
  height: 40px;
  text-transform: uppercase;
  border-radius: 20px;
  background-color: var(--color-secondary);
  font-size: 14px;
  border: none;
}
.button:disabled {
  background-color: var(--color-disabled);
  cursor: not-allowed;
}
</style>
