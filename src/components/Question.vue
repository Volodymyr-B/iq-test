<script setup>
import { ref } from "vue";

const chosenValue = ref(null);

const emit = defineEmits(["updateAnswers"]);
const { question } = defineProps(["question"]);

const emitChosenValue = () => {
  emit("updateAnswers", chosenValue.value);
  chosenValue.value = null;
};
</script>

<template>
  <div class="question_wrapper">
    <h3 class="title">{{ question.question }}</h3>
    <div v-if="question.image" class="image_container">
      <img :src="question.image" alt="" />
    </div>
    <!-- for list type question -->
    <div class="options_container" v-if="question.type === 'list'">
      <app-radio
        v-for="option in question.options"
        :key="option"
        @click="chosenValue = { [question.id]: option }"
      >
        {{ option }}
      </app-radio>
    </div>
    <!-- for visual type question -->
    <div class="square_container" v-else-if="question.type === 'visual'">
      <div
        class="square"
        :class="{ active: chosenValue && chosenValue[question.id] === option }"
        v-for="option in question.options"
        :key="option"
        :style="{ backgroundColor: option }"
        @click="chosenValue = { [question.id]: option }"
      ></div>
    </div>
    <!-- for number type question -->
    <div class="number_container" v-else>
      <div
        class="number"
        :class="{ active: chosenValue && chosenValue[question.id] === option }"
        v-for="option in question.options"
        :key="option"
        @click="chosenValue = { [question.id]: option }"
      >
        {{ option }}
      </div>
    </div>
    <div class="btn_container">
      <app-button :isDisabled="!chosenValue" @click="emitChosenValue"
        >next</app-button
      >
    </div>
  </div>
</template>

<style scoped>
.question_wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  text-align: center;
  padding: 25px 15px 0;
}
.options_container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.square_container {
  padding: 0 15px 0 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  gap: 20px;
}
.square {
  min-width: 75px;
  width: 30%;
  margin: auto;
  aspect-ratio: 1 / 1;
}
.number_container {
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}
.number {
  color: black;
  background-color: var(--color-disabled);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
}
.active {
  box-shadow: inset 0px 0px 0px 5px var(--color-secondary);
}
.btn_container {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
.image_container {
  text-align: center;
  padding: 20px;
}
.image_container img {
  max-width: 100%;
  height: 100%;
  width: auto;
}
</style>
