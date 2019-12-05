import { dispatchAPI } from "./API";
import {
  SET_QUESTION_WITHOUT_SUBSECTION_AND_OPTIONS_ASYNC,
  SET_QUESTION_WITHOUT_SUBSECTION_AND_WITH_OPTIONS_ASYNC,
  SET_QUESTION_WITH_SUBSECTION_AND_WITHOUT_OPTIONS_ASYNC,
  SET_QUESTION_WITH_SUBQUESTION_AND_OPTIONS_ASYNC,
  SET_URL_BY_SECTION_ASYNC
} from "../store/Store_Const";

export const questions_without_subsection_and_options = (method, url, data) => {
  return dispatchAPI(
    method,
    url,
    data,
    SET_QUESTION_WITHOUT_SUBSECTION_AND_OPTIONS_ASYNC
  );
};

export const questions_without_subsection_and_with_options = (
  method,
  url,
  data
) => {
  return dispatchAPI(
    method,
    url,
    data,
    SET_QUESTION_WITHOUT_SUBSECTION_AND_WITH_OPTIONS_ASYNC
  );
};

export const questions_with_subsection_and_without_options = (
  method,
  url,
  data
) => {
  return dispatchAPI(
    method,
    url,
    data,
    SET_QUESTION_WITH_SUBSECTION_AND_WITHOUT_OPTIONS_ASYNC
  );
};

export const questions_with_subquestion_and_options = (method, url, data) => {
  return dispatchAPI(
    method,
    url,
    data,
    SET_QUESTION_WITH_SUBQUESTION_AND_OPTIONS_ASYNC
  );
};

export const url_by_section = (method, url, data) => {
  return dispatchAPI(method, url, data, SET_URL_BY_SECTION_ASYNC);
};
