<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="interpretation_container">
    <p class="">
      The test will take you no more than <b class="orange">12 minutes</b>, and
      you can use its results for <b class="orange">the rest of your life.</b>
    </p>
    <div class="text_container">
      <p>
        Professional interpretation and
        <b>detailed recommendations</b> will allow you to qualitatively
        <b>change all aspects of your life:</b> from financial to love.
      </p>
    </div>
    <RouterLink class="link" to="/test">
      <app-button>start test</app-button>
    </RouterLink>
  </section>
</template>

<style scoped>
.interpretation_container {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
}
.text_container {
  background-color: var(--color-disabled);
  border-radius: 20px;
  padding: 30px 15px;
  color: black;
}
.orange {
  color: var(--color-secondary);
}
.link {
  margin-top: 30px;
}
</style>
