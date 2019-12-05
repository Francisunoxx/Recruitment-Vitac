import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";
import {
  SET_SECTION_AND_EXAM,
  SET_URL_AND_HEADER,
  SET_CREDENTIAL_STATUS
} from "./Store_Const";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hasSubSections: false,
    hasSubQuestions: false,
    hasOptions: false,
    hasVideo: false,
    section: {},
    subSections: [],
    exam: {},
    options: {},
    header: "",
    url: "",
    credential: {
      Status: {},
      Others: {}
    },
    exception: {}
  },
  getters: {
    getHasSubSections: state => {
      return state.hasSubSections;
    },
    getHasSubQuestions: state => {
      return state.hasSubQuestions;
    },
    getHasOptions: state => {
      return state.hasOptions;
    },
    getHasVideo: state => {
      return state.hasVideo;
    },
    getSection: state => {
      return state.section;
    },
    getSubSections: state => {
      return state.subSections;
    },
    getExam: state => {
      return state.exam;
    },
    getHeader: state => {
      return state.header;
    },
    getURL: state => {
      return state.url;
    },
    getCredentialStatus: state => {
      return state.credential.Status;
    }
  },
  mutations: {
    SET_SECTION_AND_EXAM(state, payload) {
      (state.hasSubSections = payload.HasSubSections),
        (state.hasSubQuestions = payload.HasSubQuestions),
        (state.hasOptions = payload.HasOptions),
        (state.hasVideo = false),
        (state.section = payload.Section),
        (state.exam = payload.Exam);
    },
    SET_URL_AND_HEADER(state, payload) {
      (state.hasSubSections = payload.HasSubSections),
        (state.hasSubQuestions = payload.HasSubQuestions),
        (state.hasOptions = payload.HasOptions),
        (state.hasVideo = payload.HasVideo),
        (state.section = payload.Section),
        (state.header = payload.Header),
        (state.url = payload.Url);
    },
    SET_CREDENTIAL_STATUS(state, payload) {
      (state.credential.Status = payload.Status),
        (state.credential.Others = payload.Others);
    }
  },
  actions: {
    SET_QUESTION_WITHOUT_SUBSECTION_AND_OPTIONS_ASYNC: (context, state) => {
      context.commit(SET_SECTION_AND_EXAM, state.data);
    },
    SET_QUESTION_WITHOUT_SUBSECTION_AND_WITH_OPTIONS_ASYNC: (
      context,
      state
    ) => {
      context.commit(SET_SECTION_AND_EXAM, state.data);
    },
    SET_QUESTION_WITH_SUBSECTION_AND_WITHOUT_OPTIONS_ASYNC: (
      context,
      state
    ) => {
      context.commit(SET_SECTION_AND_EXAM, state.data);
    },
    SET_QUESTION_WITH_SUBQUESTION_AND_OPTIONS_ASYNC: (context, state) => {
      context.commit(SET_SECTION_AND_EXAM, state.data);
    },
    SET_URL_BY_SECTION_ASYNC: (context, state) => {
      context.commit(SET_URL_AND_HEADER, state.data);
    },
    SET_CREDENTIAL_STATUS_ASYNC: (context, state) => {
      context.commit(SET_CREDENTIAL_STATUS, state.data);
    }
  },
  modules: {}
});
