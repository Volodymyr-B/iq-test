<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import brain from "../assets/images/brain.png";
import arrow from "../assets/images/arrow.svg";

const isAccordion = ref(false);
const accordionHandler = () => {
  isAccordion.value = !isAccordion.value;
};
</script>

<template>
  <section class="info_container">
    <div>
      <span>Pass accurate and fast</span>
      <h1 class="title">IQ defenition test</h1>
    </div>
    <img :src="brain" alt="" />
    <RouterLink to="/test">
      <app-button>start test</app-button>
    </RouterLink>
    <p class="highlight">
      Get advice on developing your intelligence
      <span>and improve financial and personal life conditions</span>
    </p>
    <div class="arrow_container">
      <span>details</span>
      <div class="arrow" @click="accordionHandler">
        <img :src="arrow" alt="" />
      </div>
    </div>

    <Transition>
      <div v-show="isAccordion" class="accordion">
        <p class="text">
          " A professional IQ test allows you not only to determine the
          coefficient of your intelligence, <br />
          but also to develop a list of recommendations to improve this
          indicator. "
        </p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.info_container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 50px);
}
span {
  display: block;
  margin-top: 15px;
}
.title {
  margin: 10px 0;
  text-transform: uppercase;
  color: var(--color-secondary);
}

img {
  max-width: 210px;
  max-height: 210px;
}
.highlight {
  color: var(--color-secondary);
}
.highlight span {
  color: var(--color-main);
}
p span {
  display: block;
}
.accordion {
  background-color: rgb(72, 72, 192);
  width: 100%;
}
.text {
  line-height: 24px;
  padding: 0 30px;
}
.arrow_container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}
.arrow {
  cursor: pointer;
  background-color: white;
  border-radius: 999px;
  width: 20px;
  height: 20px;
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
