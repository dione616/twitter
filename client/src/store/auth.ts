import { RootState } from "./index";
import { IState } from "./../lib/types";
import axios from "axios";
import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { User } from "../lib/types";

const initialState = {
  user: {
    createdAt: "",
    email: "",
    firstname: "",
    lastname: "",
    token: "",
    updatedAt: "",
    __v: 0,
    _id: "",
  },
};

const SET_USER = "auth/set_user_request";
const SET_USER_SUCCESS = "auth/set_user_success";
const SET_USER_FAILURE = "auth/set_user_failure";
const AUTH_REQUEST = "auth/auth_request";
const AUTH_SUCCESS = "auth/auth_success";
const AUTH_FAILURE = "auth/auth_failuer";
const REGISTER_REQUEST = "auth/register_request";
const REGISTER_SUCCESS = "auth/register_success";
const REGISTER_FAILURE = "auth/register_failuer";
const LOGOUT = "auth/logout";

interface AuthRequest extends Action<typeof AUTH_REQUEST> {}
interface AuthSuccess extends Action<typeof AUTH_SUCCESS> {
  payload: {
    user: User;
  };
}
interface AuthFailure extends Action<typeof AUTH_FAILURE> {
  payload: {
    error: string;
  };
}

interface RegisterRequest extends Action<typeof REGISTER_REQUEST> {}
interface RegisterSuccess extends Action<typeof REGISTER_SUCCESS> {
  payload: {
    user: User;
  };
}
interface RegisterFailure extends Action<typeof REGISTER_FAILURE> {
  payload: {
    error: string;
  };
}

interface SetUserRequest extends Action<typeof SET_USER> {}
interface SetUserSuccess extends Action<typeof SET_USER_SUCCESS> {
  payload: {
    user: User;
  };
}
interface SetUserFailure extends Action<typeof SET_USER_FAILURE> {
  payload: {
    error: string;
  };
}

interface Logout extends Action<typeof LOGOUT> {}

export const setUser = (): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  SetUserRequest | SetUserSuccess | SetUserFailure
> => async (dispatch) => {
  console.log("HI");

  dispatch({ type: SET_USER });

  try {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch({
        type: SET_USER_SUCCESS,
        payload: { user: JSON.parse(user).user },
      });
    }
  } catch (error) {
    dispatch({ type: SET_USER_FAILURE, payload: { error } });
  }
};
export const login = (data: {
  email: string;
  password: string;
}): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  AuthRequest | AuthSuccess | AuthFailure
> => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  try {
    const response = await axios.post("/login", data).then((res) => res.data);

    localStorage.setItem("user", JSON.stringify(response));
    dispatch({ type: AUTH_SUCCESS, payload: { user: response.user } });
  } catch (error) {
    dispatch({ type: AUTH_FAILURE, payload: { error } });
  }
};

export const register = (data: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repeat_password: string;
}): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  RegisterRequest | RegisterSuccess | RegisterFailure
> => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    const response = await axios
      .post("/register", data)
      .then((res) => res.data.response);

    localStorage.setItem("user", JSON.stringify(response));
    dispatch({ type: REGISTER_SUCCESS, payload: { user: response } });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: { error } });
  }
};

export const logout = (): Logout => {
  localStorage.removeItem("user");
  return { type: LOGOUT };
};

export const authSelector = (rootState: RootState) => {
  return rootState.authReducer;
};

//selector func for events
export const selectAuth = (rootState: RootState) => {
  return authSelector(rootState);
};

export const authReducer: Reducer<
  IState,
  | AuthSuccess
  | AuthFailure
  | RegisterSuccess
  | RegisterFailure
  | Logout
  | SetUserSuccess
  | SetUserFailure
> = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SUCCESS: {
      console.log(action.payload.user);

      return { ...state, user: action.payload.user };
    }
    case AUTH_SUCCESS: {
      return { ...state, user: action.payload.user };
    }
    case REGISTER_SUCCESS: {
      return { ...state, user: action.payload.user };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
