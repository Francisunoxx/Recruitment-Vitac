<template>
  <div class="divContainer">
    <div class="divA">
      <div
        class="divContent"
        v-for="(item, index) in getExam"
        :key="item.QuestionId"
      >
        <NumberIndex :index="index" />
        <div class="divItem">
          <p>{{ item.Quiz }}</p>

          <input v-if="!getHasSubQuestions && !getHasOptions" type="text" />

          <div
            v-else-if="!getHasSubQuestions && getHasOptions"
            class="divOptions"
          >
            <div v-for="option in item.Options" :key="option.OptionId">
              <input type="radio" :name="option.QuestionId" />
              <label>{{ option.Option }}</label>
            </div>
          </div>

          <div
            v-else-if="getHasSubQuestions && getHasOptions"
            class="divSubQuestionContainer"
          >
            <div class="divFirstRow">
              <label v-for="option in item.Options" :key="option.OptionId">{{
                option.Option
              }}</label>
            </div>

            <div class="divSecondRow">
              <div class="divSubQuestion">
                <p
                  v-for="subQuestion in item.SubQuestions"
                  :key="subQuestion.Id"
                >
                  {{ subQuestion.Quiz }}
                </p>
              </div>

              <div class="divSubQuestionOptions">
                <div class="divSubQuestion">
                  <p>
                    <label
                      v-for="(option, index) in item.SubQuestions[0].Options"
                      :key="option.OptionId + index"
                      >{{ option.Option }}</label
                    >
                  </p>
                </div>
                <p
                  class="divSubQuestionRadioButton"
                  v-for="(subQuestion, index) in item.SubQuestions"
                  :key="subQuestion.Id"
                >
                  <input
                    type="radio"
                    :name="option.QuestionId + index"
                    v-for="option in subQuestion.Options"
                    :key="option.OptionId"
                  />
                </p>
              </div>
            </div>
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
  name: "QuestionWithoutSubSection",
  props: [
    "getHasSubSections",
    "getHasSubQuestions",
    "getHasOptions",
    "getExam",
    "onClickSteps",
    "currentStep"
  ],
  components: { NumberIndex, Save }
};
</script>

<style scoped src="../css/QuestionItem.css" />
