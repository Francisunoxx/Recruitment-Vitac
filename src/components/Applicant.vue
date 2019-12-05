<template>
  <div class="divApplicantContainer">
    <div class="divHeader">
      <div class="divLogo">
        <img src="../assets/Logo.svg" />
      </div>
      <div class="divSubmit">
        <h4>SUBMIT TEST</h4>
      </div>
    </div>

    <div class="divBody">
      <img src="../assets/Dashboard.png" />
      <div class="divQuestion">
        <div class="divBodyHeader" v-if="!isModalVisible">
          <Steps
            v-for="item in steps"
            :key="item.count"
            :isFirstStep="item.isFirstStep"
            :isLastStep="item.isLastStep"
            :isSelected="item.isSelected"
            :isFinished="item.isFinished"
            :count="item.count"
            :text="item.text"
          />
        </div>
        <div class="divContainer">
          <div class="divQuestionContainer">
            <Question
              v-if="!isModalVisible"
              :onClickSteps="onClickSteps"
              :currentStep="getCurrentStep"
            />
          </div>
        </div>
      </div>
    </div>

    <ApplicantModal v-if="isModalVisible" :onClickModal="onClickModal" />
  </div>
</template>

<script>
import Steps from "./Steps.vue";
import Pagination from "./Pagination.vue";
import ApplicantModal from "./ApplicantModal.vue";
import Question from "./Question.vue";
import { store } from "../store/store";
import { mapGetters } from "vuex";
import {
  POST,
  PATH_BASE,
  VERSION_1,
  ROUTE_QUESTION,
  ACTION_WITHOUT_SUBSECTION_AND_OPTIONS,
  ACTION_WITHOUT_SUBSECTION_AND_WITH_OPTIONS,
  ACTION_WITH_SUBSECTION_AND_WITHOUT_OPTIONS,
  ACTION_WITH_SUBQUESTION_AND_OPTIONS,
  ACTION_GET_URL_BY_SECTION
} from "../api/API_Const";
import {
  questions_without_subsection_and_options,
  questions_without_subsection_and_with_options,
  questions_with_subsection_and_without_options,
  questions_with_subquestion_and_options,
  url_by_section
} from "../api/QuestionAPI";

export default {
  name: "Applicant",
  data: function() {
    return {
      isModalVisible: true,
      steps: [
        {
          isFirstStep: true,
          isLastStep: false,
          isSelected: true,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: false,
          hasVideo: false,
          count: 1,
          text: "Technical Knowledge Test"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: true,
          hasVideo: false,
          count: 2,
          text: "Contextual Grammar Review"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: false,
          hasVideo: true,
          count: 3,
          text: "A Refresher on Verb Tenses"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: true,
          hasOptions: false,
          hasVideo: false,
          count: 4,
          text: "Tenses Accuracy"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: false,
          hasVideo: true,
          count: 5,
          text: "A Refresher on Articles"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: true,
          hasSubSections: false,
          hasOptions: true,
          hasVideo: false,
          count: 6,
          text: "Article Usage"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: false,
          hasVideo: true,
          count: 7,
          text: "A Review on Prepositions"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: false,
          hasVideo: false,
          count: 8,
          text: "Prepositional Grammar"
        },
        {
          isFirstStep: false,
          isLastStep: false,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: false,
          hasVideo: true,
          count: 9,
          text: "Listening & Memory Test I"
        },
        {
          isFirstStep: false,
          isLastStep: true,
          isSelected: false,
          isFinished: null,
          hasSubQuestions: false,
          hasSubSections: false,
          hasOptions: true,
          hasVideo: false,
          count: 10,
          text: "Listening & Memory Test II"
        }
      ]
    };
  },
  methods: {
    onClickModal() {
      if (this.isModalVisible) {
        this.isModalVisible = false;
      } else {
        this.isModalVisible = true;
      }
    },
    onClickSteps(index) {
      let url = "";

      for (let x = 1; x < this.steps.length + 1; x++) {
        if (index === x) {
          this.steps[x - 1].isSelected = true;
          this.steps[x - 2].isFinished = true;

          if (
            !this.steps[x - 1].hasSubQuestions &&
            !this.steps[x - 1].hasSubSections &&
            this.steps[x - 1].hasOptions &&
            !this.steps[x - 1].hasVideo
          ) {
            url = `${PATH_BASE}${VERSION_1}${ROUTE_QUESTION}${ACTION_WITHOUT_SUBSECTION_AND_WITH_OPTIONS}`;

            questions_without_subsection_and_with_options(POST, url, {
              SectionToSearch: this.steps[x - 1].text
            });
          } else if (
            !this.steps[x - 1].hasSubQuestions &&
            !this.steps[x - 1].hasSubSections &&
            !this.steps[x - 1].hasOptions &&
            this.steps[x - 1].hasVideo
          ) {
            url = `${PATH_BASE}${VERSION_1}${ROUTE_QUESTION}${ACTION_GET_URL_BY_SECTION}`;

            url_by_section(POST, url, {
              Text: this.steps[x - 1].text
            });
          } else if (
            !this.steps[x - 1].hasSubQuestions &&
            this.steps[x - 1].hasSubSections &&
            !this.steps[x - 1].hasOptions &&
            !this.steps[x - 1].hasVideo
          ) {
            url = `${PATH_BASE}${VERSION_1}${ROUTE_QUESTION}${ACTION_WITH_SUBSECTION_AND_WITHOUT_OPTIONS}`;

            questions_with_subsection_and_without_options(POST, url, {
              SectionToSearch: this.steps[x - 1].text
            });
          } else if (
            this.steps[x - 1].hasSubQuestions &&
            !this.steps[x - 1].hasSubSections &&
            this.steps[x - 1].hasOptions &&
            !this.steps[x - 1].hasVideo
          ) {
            url = `${PATH_BASE}${VERSION_1}${ROUTE_QUESTION}${ACTION_WITH_SUBQUESTION_AND_OPTIONS}`;

            questions_with_subquestion_and_options(POST, url, {
              SectionToSearch: this.steps[x - 1].text
            });
          } else if (
            !this.steps[x - 1].hasSubQuestions &&
            !this.steps[x - 1].hasSubSections &&
            !this.steps[x - 1].hasOptions &&
            !this.steps[x - 1].hasVideo
          ) {
            url = `${PATH_BASE}${VERSION_1}${ROUTE_QUESTION}${ACTION_WITHOUT_SUBSECTION_AND_OPTIONS}`;

            questions_without_subsection_and_options(POST, url, {
              SectionToSearch: this.steps[x - 1].text
            });
          }
        } else {
          this.steps[x - 1].isSelected = false;
        }
      }
    }
  },
  computed: {
    ...mapGetters(["getSubSections"]),
    getCurrentStep() {
      return this.steps.filter(item => {
        return item.isSelected === true;
      })[0];
    }
  },
  updated() {},
  components: {
    Steps,
    Pagination,
    ApplicantModal,
    Question
  }
};
</script>

<style scoped src="../css/Applicant.css" />
