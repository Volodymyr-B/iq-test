<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isSidebar = ref(false);
const showSidebar = () => {
  isSidebar.value = true;
};
const hideSidebar = () => {
  isSidebar.value = false;
};
</script>

<template>
  <header class="header">
    <nav>
      <div class="button_mobile" @click="showSidebar"><span></span></div>
      <app-sidebar v-show="isSidebar" @closeSidebar="hideSidebar">
        <nav class="nav_container">
          <RouterLink @click="hideSidebar" class="link" to="/">
            Home
          </RouterLink>
          <RouterLink @click="hideSidebar" class="link" to="/info"
            >Information
          </RouterLink>
          <RouterLink @click="hideSidebar" class="link" to="/test"
            >Test
          </RouterLink>
        </nav>
      </app-sidebar>
    </nav>
  </header>
</template>

<style scoped>
.header {
  height: 50px;
}
.nav_container {
  padding: 110px 0 0 23px;
  display: flex;
  flex-direction: column;
  gap: 27px;
}
.link {
  color: var(--color-main);
  text-transform: uppercase;
  text-decoration: none;
}
.link:hover {
  color: var(--color-secondary);
}

.button_mobile {
  top: 15px;
  left: 15px;
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 20px;
}
.button_mobile::before,
.button_mobile::after,
.button_mobile span {
  position: absolute;
  left: 0;
  width: 24px;
  height: 3px;
  background-color: var(--color-disabled);
}
.button_mobile::before,
.button_mobile::after {
  content: "";
}
.button_mobile::before {
  top: 0;
}
.button_mobile::after {
  bottom: 0;
}
.button_mobile span {
  top: 43%;
}
</style>
