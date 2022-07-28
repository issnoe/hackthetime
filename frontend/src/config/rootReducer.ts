/* import { profileReducer } from "../modules/profile/profileReducers";
import { accountReducer } from "../modules/account/accountReducers";
import { apiKeyReducer } from "../modules/apiKey/apiKeyReducers";
import { authReducer } from "../modules/auth/authReducers";
import { alertMessageReducer } from "../modules/alert/alertReducers";
import { confirmReducer } from "../modules/confirm/confirmReducers";
import { adminAccountsReducer } from "../modules/adminAccounts/adminAccountsReducers";
import { AdminAccountsState } from "../modules/adminAccounts/adminAccountsTypes";
import { AccountState } from "../modules/account/accountTypes";
import { AlertMessagesState } from "../modules/alert/alertTypes";
import { ConfirmState } from "../modules/confirm/confirmTypes";
import { ApiKeyState } from "../modules/apiKey/apiKeyTypes";
import { AuthState, LOGOUT } from "../modules/auth/authTypes";
import { ProfileState } from "../modules/profile/profileTypes";
 */
import type { Reducer } from 'redux';
import { combineReducers } from "redux";
import { TimeState } from "../modules/time";
import { TimeReducer } from "../modules/timerReducers";
import { AlertMessagesState } from "../modules/alert/alertTypes";
import { alertMessageReducer } from "../modules/alert/alertReducers";

export interface AppState {
  /*   adminAccounts: AdminAccountsState;
  account: AccountState;
  alert: AlertMessagesState;
  confirm: ConfirmState;
  apiKey: ApiKeyState;
  auth: AuthState;
  profile: ProfileState; */
  time: TimeState;
  alert: AlertMessagesState;
}

export const createRootReducer = (): Reducer<AppState> => {
  return combineReducers({
    time: TimeReducer,
    alert: alertMessageReducer,
  });
};
