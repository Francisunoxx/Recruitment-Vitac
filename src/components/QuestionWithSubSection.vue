<template>
  <div class="divContainer">
    <div class="divA">
      <div
        class="divSubSectionContent"
        v-for="item in getExam"
        :key="item.QuestionId"
      >
        <div class="divSubSectionHeader">
          <div class="divSubSectionText">
            <h4>
              {{ item.SubSection.Text }}
            </h4>
          </div>
          <div class="divSubSectionDescription">
            <p>
              {{ item.SubSection.Description }}
            </p>
          </div>
        </div>

        <div
          class="divSubSectionItem"
          v-for="(question, index) in item.Questions"
          :key="question.QuestionId"
        >
          <NumberIndex :index="index" />
          <div class="divSubSectionQuestion">
            <p>{{ question.Quiz }}</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="divButton">
        <Save :onClickSteps="onClickSteps" :currentStep="currentStep" />
      </div>
    </div>
  </div>
</template>

<script>
import NumberIndex from "./NumberIndex.vue";
import Save from "./Save.vue";

export default {
  name: "QuestionWithSubSection",
  props: ["getExam", "onClickSteps", "currentStep"],
  components: {
    NumberIndex,
    Save
  }
};
</script>

<style scoped src="../css/QuestionItem.css" />
