import {
  GetTimeActionType,
  TimeState,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_TASKFOCUS_REQUEST,
  GET_TASKFOCUS_REQUEST,
} from "./time";

export const initialState: TimeState = {
  task: null,
  dateStart: "",
  dateEnd: "",
  isLoading: false,
};

export const TimeReducer = (
  state = initialState,
  action: GetTimeActionType
): TimeState => {
  console.log("action.type", action.type, GET_TASKFOCUS_REQUEST);
  switch (action.type) {
    case GET_TASKFOCUS_REQUEST:
      return { ...state };
    case UPDATE_TASKFOCUS_REQUEST:
      console.log("access to updata", action);

      return { ...state, ...action.payload };
    case GET_PROFILE_REQUEST:
      return {
        ...state,
      };
    case GET_PROFILE_SUCCESS:
      // saveToken(action.payload.access_token);
      return {
        ...state,
        ...action.payload,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        // isLoggingIn: false,
        // error: true,
        // errorMessage: 'Invalid email or password.'
      };
    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
