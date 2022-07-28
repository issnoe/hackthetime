export interface TimeState {
  task: string | null;
  dateStart: string;
  dateEnd: string;
  isLoading: boolean;
}

export const UPDATE_TASKFOCUS_REQUEST = "profile/UPDATE_TASKFOCUS_REQUEST";
export const GET_TASKFOCUS_REQUEST = "profile/GET_TASKFOCUS_REQUEST";

interface UpdateTaskFocusRequestAction {
  type: typeof UPDATE_TASKFOCUS_REQUEST;
  payload: TimeState;
}

export const updateTaskFocusRequestAction_ = (timeState: TimeState) => {
  return {
    type: UPDATE_TASKFOCUS_REQUEST,
    payload: timeState,
  };
};

/* {
  type: typeof UPDATE_TASKFOCUS_REQUEST;
  payload: TimeState;
} */
interface GetTaskFocusRequestAction {
  type: typeof GET_TASKFOCUS_REQUEST;
}

export const GET_PROFILE_REQUEST = "profile/GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "profile/GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "profile/GET_PROFILE_FAILURE";

export const UPDATE_PASSWORD_REQUEST = "profile/UPDATE_PASSWORD_REQUEST";
export const UPDATE_PASSWORD_SUCCESS = "profile/UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_FAILURE = "profile/UPDATE_PASSWORD_FAILURE";

interface GetProfileRequestAction {
  type: typeof GET_PROFILE_REQUEST;
}

interface GetProfileSuccessAction {
  type: typeof GET_PROFILE_SUCCESS;
  payload: TimeState;
}

interface GetProfileFailure {
  type: typeof GET_PROFILE_FAILURE;
  payload: {
    message: string;
  };
  error: boolean;
}

interface UpdatePasswordRequestAction {
  type: typeof UPDATE_PASSWORD_REQUEST;
}

interface UpdatePasswordSuccessAction {
  type: typeof UPDATE_PASSWORD_SUCCESS;
  payload: TimeState;
}

interface UpdatePasswordFailureAction {
  type: typeof UPDATE_PASSWORD_FAILURE;
  error: boolean;
}
export const UpdateTaskFocus = (task: TimeState): GetTimeActionType => {
  return {
    type: UPDATE_TASKFOCUS_REQUEST,
    payload: {
      ...task,
    },
  };
};
export type GetTimeActionType =
  | GetProfileRequestAction
  | GetProfileSuccessAction
  | GetProfileFailure
  | UpdatePasswordRequestAction
  | UpdatePasswordSuccessAction
  | UpdatePasswordFailureAction
  | GetTaskFocusRequestAction
  | UpdateTaskFocusRequestAction;
