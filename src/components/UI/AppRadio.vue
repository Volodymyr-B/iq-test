<script>
export default { name: "app-radio" };
</script>

<script setup></script>

<template>
  <label class="radio_wrapper">
    <input class="radio" type="radio" name="radio" />
    <span class="text">
      <slot></slot>
    </span>
  </label>
</template>

<style scoped>
.radio_wrapper {
  cursor: pointer;
}
.radio {
  display: none;
}
.radio:checked + span {
  background-color: var(--color-secondary);
}
.radio:checked + span:before {
  background-color: rgba(41, 80, 194, 1);
  box-shadow: inset 0 0 0 1px black;
}
.text {
  padding: 0 15px 0 30px;
  min-height: 50px;
  display: flex;
  align-items: center;
  transition: 0.25s ease;
  background-color: rgba(242, 243, 243, 0.15);
}

.text:before {
  content: "";
  min-width: 25px;
  min-height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  transition: 0.25s ease;
  box-shadow: inset 0 0 0 1px #ffffff;
}
</style>
