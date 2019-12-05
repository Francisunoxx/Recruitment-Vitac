<template>
  <div class="divQuestionContainer">
    <div class="divQuestion">
      <div class="divHeaderContainer">
        <div class="divHeader">
          <div class="divContent">
            <div class="divSectionHeader">
              <h4>Section {{ currentStep.count }} of 10</h4>
            </div>
            <div class="divSection">
              <h3>{{ getSection.Text }}</h3>
            </div>
            <div class="divMessage">
              <p>
                {{ getSection.Description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="divBodyContainer">
        <QuestionWithoutSubSection
          v-if="!getHasVideo && !getHasSubSections"
          :getHasSubSections="getHasSubSections"
          :getHasSubQuestions="getHasSubQuestions"
          :getHasOptions="getHasOptions"
          :getExam="getExam"
          :onClickSteps="onClickSteps"
          :currentStep="currentStep"
        />
        <QuestionWithSubSection
          v-if="!getHasVideo && getHasSubSections"
          :getExam="getExam"
          :onClickSteps="onClickSteps"
          :currentStep="currentStep"
        />
        <Video
          v-else-if="getHasVideo"
          :getHeader="getHeader"
          :getURL="getURL"
          :onClickSteps="onClickSteps"
          :currentStep="currentStep"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";
import { mapGetters } from "vuex";
import {
  POST,
  PATH_BASE,
  VERSION_1,
  ROUTE_QUESTION,
  ACTION_WITHOUT_SUBSECTION_AND_OPTIONS
} from "../api/API_Const";
import { questions_without_subsection_and_options } from "../api/QuestionAPI";
import QuestionWithoutSubSection from "./QuestionWithoutSubSection.vue";
import QuestionWithSubSection from "./QuestionWithSubSection.vue";
import Video from "./Video.vue";

export default {
  name: "Question",
  props: ["onClickSteps", "currentStep"],
  beforeCreate() {
    const url = `${PATH_BASE}${VERSION_1}${ROUTE_QUESTION}${ACTION_WITHOUT_SUBSECTION_AND_OPTIONS}`;

    //Call first section
    questions_without_subsection_and_options(POST, url, {
      SectionToSearch: "Technical Knowledge Test"
    });
  },
  computed: {
    ...mapGetters([
      "getHasSubSections",
      "getHasSubQuestions",
      "getHasOptions",
      "getHasVideo",
      "getSection",
      "getExam",
      "getHeader",
      "getURL"
    ]),
    styleMessage() {
      return {
        marginBottom: "1%"
      };
    }
  },
  components: {
    QuestionWithoutSubSection,
    QuestionWithSubSection,
    Video
  }
};
</script>

<style scoped src="../css/Question.css" />
