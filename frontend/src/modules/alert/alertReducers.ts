import {
  ALERT_MESSAGE,
  AlertMessageActions,
  AlertMessagesState,
  CLEAR_ALERTS,
  DISMISS_ALERT,
} from "./alertTypes";

export const initialState: AlertMessagesState = {
  messages: [],
};

export const alertMessageReducer = (
  state = initialState,
  action: AlertMessageActions
): AlertMessagesState => {
  switch (action.type) {
    case ALERT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case DISMISS_ALERT:
      return {
        ...state,
        messages: state.messages.filter((m) => m.id !== action.payload.id),
      };
    case CLEAR_ALERTS:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
