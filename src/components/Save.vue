<template>
  <button v-on:click="onClickSteps(currentStep.count + 1)">
    SAVE & NEXT
  </button>
</template>

<script>
export default {
  name: "Save",
  props: ["onClickSteps", "currentStep"]
};
</script>

<style scoped>
.divButton > button {
  margin-left: auto;
  margin-right: 2%;
  height: 70%;
  color: white;
  background: #4cb050;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
