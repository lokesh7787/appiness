import {
  ON_USER_CHANGE,
  ON_PASSWARD_CHANGE,
  SHOW_WARNING_MSG,
} from "./constants";

export function actionCreator(payload, type) {
  switch (type) {
    case "ON_USER_CHANGE":
      return { type: ON_USER_CHANGE, payload };
    case "ON_PASSWARD_CHANGE":
      return { type: ON_PASSWARD_CHANGE, payload };
    case "SHOW_WARNING_MSG":
      return { type: SHOW_WARNING_MSG, payload };
  }
}
