import { dispatchAPI } from "./API";
import {
    SET_CREDENTIAL_STATUS_ASYNC
} from "../store/Store_Const";

export const login = (method, url, data) => {
    return dispatchAPI(
      method,
      url,
      data,
      SET_CREDENTIAL_STATUS_ASYNC
    );
  };
  