<template>
  <div class="divContainer">
    <div class="divBody">
      <h4>{{ getHeader }}</h4>
      <iframe :src="getURL"> </iframe>
      <div class="divButton">
        <button v-on:click="onClickSteps(currentStep.count + 1)">
          SAVE & NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: ["getHeader", "getURL", "onClickSteps", "currentStep"]
};
</script>

<style scoped src="../css/Video.css" />
