<template>
  <div class="divPaginationContainer">
      <button 
      v-on:click="onClickSteps(currentStep.count + 1)">SAVE & NEXT</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  components: {},
  props: ["onClickSteps", "currentStep"]
};
</script>

<style scoped src="../css/Pagination.css" />
