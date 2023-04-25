<script setup>
import { RouterLink } from "vue-router";
import brainSkills from "../assets/images/brain-skills.png";
</script>

<template>
  <section class="guidance_container">
    <p class="text">
      Also, according to test results <b>you will receive</b> detailed
      <b>advice</b> <br />
      on determining the most promising field of activity
      <b> for your type of intellect,</b> <br />
      which will bring you the fastest financial result.
    </p>
    <img :src="brainSkills" alt="" />
    <RouterLink to="/test">
      <app-button>start test</app-button>
    </RouterLink>
  </section>
</template>

<style scoped>
.guidance_container {
  background-color: aliceblue;
  color: black;
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
}
.text {
  line-height: 24px;
}
b {
  text-transform: uppercase;
}
</style>
