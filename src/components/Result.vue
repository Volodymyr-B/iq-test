<script setup>
import Answer from "../components/Answer.vue";
import { onUnmounted, onMounted, ref, watch } from "vue";
import { numToTime } from "../utils/time-formatter";

const { response, userData } = defineProps(["response", "userData"]);

const emit = defineEmits(["fetchAnswer"]);
const emitFetchAnswer = () => {
  emit("fetchAnswer");
};

const timer = ref(600);
const interval = setInterval(() => (timer.value -= 1), 1000);

watch(timer, () => {
  if (timer.value === 0) {
    clearInterval(interval);
  }
});

onMounted(() => {
  interval;
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <section class="result_wrapper">
    <h5 class="header">Your result is calculated:</h5>
    <p>
      You are among the 3% of respondents whose intelligence level is more than
      15 points different from the average up or down!
    </p>
    <div v-if="!response">
      <h6 class="header success">Get your results now!</h6>
      <p>
        In order to protect personal test result data, their detailed
        interpretation and recommendations are available as a voice message on a
        call from your mobile phone
      </p>
      <p class="success">
        Call now, appointments are available
        <span>{{ numToTime(timer) }} min</span>
      </p>
      <button
        class="call_btn"
        @click="emitFetchAnswer"
        :isDisabled="timer === 0"
      >
        call now
      </button>
    </div>
    <Answer v-else :response="response" :user-data="userData" />
  </section>
</template>

<style scoped>
.result_wrapper {
  text-align: center;
  padding: 0 15px 0 15px;
}
.header {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 10%;
  text-transform: uppercase;
}

.success {
  color: var(--color-success);
}
.call_btn {
  cursor: pointer;
  color: white;
  width: 290px;
  height: 90px;
  text-transform: uppercase;
  background-color: #eb1b00;
  border: none;
}
</style>
