import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth";
import { twittReducer } from "./twitt";

const rootReduer = combineReducers({
  authReducer,
  twittReducer,
});

export type RootState = ReturnType<typeof rootReduer>;

export const store = createStore(
  rootReduer,
  composeWithDevTools(applyMiddleware(thunk))
);
