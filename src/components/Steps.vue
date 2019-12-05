<template>
  <div :style="styleDivContainer">
    <div class="divLine" :style="styleDivLine" v-if="!isFirstStep"></div>
    <div
      class="divCount"
      :style="styleDivCount"
      v-on:click="onClickSteps(count)"
    >
      <!--<div class="divText" :style="styleText">
        <h5>{{ text }}</h5>
      </div>-->
      <h4>{{ count }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: [
    "isFirstStep",
    "isLastStep",
    "isSelected",
    "isFinished",
    "count",
    "text"
  ],
  methods: {},
  computed: {
    styleDivContainer() {
      let height = "50%",
        width;

      if (this.isFirstStep && !this.isLastStep) {
        if (window.innerHeight == 625) {
          width = "2.1%";
        } else {
          width = "1.5%";
        }
      } else {
        width = "10%";
      }

      return {
        height: height,
        width: width,
        display: "flex",
        alignItems: "center"
      };
    },
    styleDivCount() {
      let color;

      if (this.isFinished || this.isSelected) {
        color = "#039be5";
      } else {
        color = "#e7e7e7";
      }

      return {
        background: color
      };
    },
    styleDivLine() {
      let width, color;

      if (this.isFirstStep && !this.isLastStep) {
        width = "90%";
      } else {
        width = "100%";
      }

      if (this.isFinished || this.isSelected) {
        color = "#039be5";
      } else {
        color = "#e7e7e7";
      }

      return {
        height: "10%",
        width: width,
        background: color
      };
    },
    styleText() {
      let display;

      if (this.isSelected) {
        display = "block";
      } else {
        display = "none";
      }

      return {
        display: display
      };
    }
  }
};
</script>

<style scoped src="../css/Steps.css" />
