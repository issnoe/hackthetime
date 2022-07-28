export interface AlertMessagesState {
  messages: AlertMessage[];
}

export interface AlertMessage {
  id: string;
  message: string;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  dismissible?: boolean;
}

export const ALERT_MESSAGE = "ALERT_MESSAGE";
export const ALERT_ERROR_MESSAGE = "ALERT_ERROR_MESSAGE";
export const CLEAR_ALERTS = "CLEAR_MESSAGES";
export const DISMISS_ALERT = "DISMISS_ALERT";

interface FlashMessageAction {
  type: typeof ALERT_MESSAGE;
  payload: AlertMessage;
}

interface FlashErrorMessageAction {
  type: typeof ALERT_ERROR_MESSAGE;
  payload: AlertMessage;
}

interface ClearAlertAction {
  type: typeof CLEAR_ALERTS;
}

interface DismissAlertAction {
  type: typeof DISMISS_ALERT;
  payload: {
    id: string;
  };
}

export type AlertMessageActions =
  | FlashMessageAction
  | FlashErrorMessageAction
  | ClearAlertAction
  | DismissAlertAction;
