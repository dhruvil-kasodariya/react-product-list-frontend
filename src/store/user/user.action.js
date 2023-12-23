import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.type";

export const emailSignInStart = (boolean) =>
  createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, boolean);

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error);

export const signUpStart = (boolean) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_START, boolean);

export const signUpSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, user);

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error);

export const signOutSuccess =()=>
  createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS)
