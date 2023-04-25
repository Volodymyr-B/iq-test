<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import test from "../data/iq-test";

import Result from "../components/Result.vue";
import Question from "../components/Question.vue";
import ProgressBar from "../components/ProgressBar.vue";
import LoadingScreen from "../components/loading-screen/LoadingScreen.vue";
import LoadingError from "../components/loading-screen/LoadingError.vue";

const serverResponse = ref(null);
const isLoading = ref(false);
const isResponseError = ref(false);

const userAnswers = {};
const currentQuestion = ref(0);
const showResults = ref(false);

const currentProgress = computed(
  () => (currentQuestion.value / test.length) * 100
);

const handleAnswer = (value) => {
  if (currentQuestion.value === test.length - 1) {
    showResults.value = true;
  }
  Object.assign(userAnswers, value);
  currentQuestion.value++;
};

const fetchAnswer = async () => {
  isLoading.value = true;
  isResponseError.value = false;
  try {
    const response = await axios.get("https://swapi.dev/api/people/1/");
    serverResponse.value = response.data;
  } catch (e) {
    isResponseError.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <main class="test_wrapper">
    <ProgressBar :progress="currentProgress" />
    <LoadingScreen v-if="isLoading" />
    <LoadingError v-if="isResponseError" />
    <Question
      v-if="!showResults && !isResponseError"
      :question="test[currentQuestion]"
      @updateAnswers="handleAnswer"
    />
    <Result
      v-else-if="showResults && !isLoading && !isResponseError"
      @fetchAnswer="fetchAnswer"
      :response="serverResponse"
      :user-data="userAnswers"
    />
  </main>
</template>

<style scoped>
.test_wrapper {
  height: calc(100% - 50px);
}
</style>
