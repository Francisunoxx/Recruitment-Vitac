import Axios from "axios";
import { store } from "../store/store";

export const dispatchAPI = (method, url, data, setter) => {
  return Axios({
    method: method,
    url: url,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  })
    .then(result => result.data)
    .then(data => {
      store.dispatch(setter, { data });
    })
    .catch(error => {
      console.log(error.message);
      store.dispatch('exception', error);
    });
};
