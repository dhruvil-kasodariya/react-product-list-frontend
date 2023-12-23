import { USER_ACTION_TYPE } from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPE.SIGN_UP_START:
      return {
        ...state,
        isLoading: payload,
      };
    case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPE.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPE.SIGN_IN_FAILED:
    case USER_ACTION_TYPE.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload.response.data,
        isLoading: false,
      };
    case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser:null
      }

    default:
      return state;
  }
};
