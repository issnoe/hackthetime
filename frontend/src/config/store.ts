import { compose, createStore, Store, StoreEnhancer, applyMiddleware } from 'redux';
import { AppState, createRootReducer } from './rootReducer';
import { createBrowserHistory } from 'history';
import type { Path } from 'history';
/* import { createAlertMiddleware } from '../modules/alert/alertMiddleware';
import { createAccountMiddleware } from '../modules/account/accountMiddleware';
import { createAuth0Middleware } from '../modules/auth/auth0Middleware';
import { createConfirmMiddleware } from '../modules/confirm/confirmMiddleware';
import { initialState as initialAuthState } from '../modules/auth/authReducers';
import { initialState as initialAccountState } from '../modules/account/accountReducers';
import { initialState as initialProfileState } from '../modules/profile/profileReducers';
import { initialState as initialAdminAccountsState } from '../modules/adminAccounts/adminAccountsReducers';
import { initialState as initialAlertState } from '../modules/alert/alertReducers';
import { initialState as initialConfirmState } from '../modules/confirm/confirmReducers';
import { initialState as initialApiKeyState } from '../modules/apiKey/apiKeyReducers'; */
import { initialState as initialTimeState } from '../modules/timerReducers';
import { initialState as initialAlertState } from '../modules/alert/alertReducers';

//export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const composeEnhancers =  compose;
const history = createBrowserHistory();

/**
 * Replaces the push and replace methods of the history API with custom functions that allow us
 * to route to the correct location when Auth0 is enabled. This is only temporary until the old
 * authentication flow is deprecated, at which point all v2 routing logic will be removed.
 * ex. history.push('/app/settings/team-members') -> /v2/app/settings/team-members
 */
/* function replaceHistoryMethod(method: 'push' | 'replace') {
  const originalMethod = history[method].bind(history);

  function shouldUpdatePath(path: string): boolean {
    const regex = /^\/((?:v2)?)/;
    const result = regex.exec(path);
    return result && result[1] !== 'v2';
  }

  history[method] = (pathOrLocation: Path | LocationDescriptor<unknown>, state?: unknown): void => {
    let args = [pathOrLocation, state];

    if (typeof pathOrLocation === 'string') {
      const path = pathOrLocation;
      if (shouldUpdatePath(path)) {
        args = [`/v2${path}`, state];
      }
    } else {
      const path = pathOrLocation.pathname;
      if (shouldUpdatePath(path)) {
        args = [
          {
            ...pathOrLocation,
            pathname: `/v2${path}`,
          },
        ];
      }
    }

    return originalMethod(...args);
  };
} */

// TODO: Remove once we are fully ready to switch over to auth0
/* replaceHistoryMethod('push');
replaceHistoryMethod('replace'); */

export { history as history };

const middlewares = [
/*   createAuth0Middleware(),
  createAccountMiddleware(history),
  createAlertMiddleware(),
  createConfirmMiddleware(), */
];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer];

const initialState: AppState = {
 /*  adminAccounts: initialAdminAccountsState,
  account: initialAccountState,
  alert: initialAlertState,
  confirm: initialConfirmState,
  apiKey: initialApiKeyState,
  auth: initialAuthState,
  profile: initialProfileState, */
  time:initialTimeState,
  alert: initialAlertState,
};

const composedEnhancer: StoreEnhancer = composeEnhancers(...storeEnhancers);
export const store: Store<AppState> = createStore(createRootReducer(), initialState, composedEnhancer);

/**
 * Provide the dispatch function on the window for debugging purposes.
 */
//window.dispatch = store.dispatch;
