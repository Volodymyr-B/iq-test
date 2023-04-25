<script>
export default { name: "app-sidebar" };
</script>

<script setup>
const emit = defineEmits(["closeSidebar"]);

const emitCloseSidebar = () => {
  emit("closeSidebar");
};
</script>

<template>
  <Transition>
    <div class="container">
      <div class="closeBtn" @click="emitCloseSidebar"></div>
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
}
.closeBtn {
  cursor: pointer;
  position: absolute;
  border-radius: 9999px;
  top: 18px;
  right: 13px;
  width: 28px;
  height: 28px;
}
.closeBtn:active {
  background: var(--color-disabled);
}
.closeBtn::before,
.closeBtn::after {
  content: "";
  position: absolute;
  top: 12px;
  width: 28px;
  height: 3px;
  background: var(--color-secondary);
}

.closeBtn::before {
  transform: rotate(45deg);
}

.closeBtn::after {
  transform: rotate(-45deg);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
