import { ADD_ARTICLE, ON_USER_CHANGE, ON_PASSWARD_CHANGE } from "./constants";
let initialState = {
  userName: "",
  passWord: "",
  userNameError: "",
  passWordError: "",
  bothFieldError: "",
  isValidUserName: true,
  isValidPassword: true,
  isBothValid: true,
};

function rootReducer(state = initialState, action) {
  //   if (action.type === ON_USER_CHANGE) {
  //     return { ...state, ...action.payload };
  //   } else if (action.type === ON_PASSWARD_CHANGE) {
  //     return { ...state, ...action.payload };
  //   }
  return { ...state, ...action.payload };
}

export default rootReducer;
