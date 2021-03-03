import { RootState } from "./index";
import { Twitt, TwittsState } from "./../lib/types";
import { Action, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

const CREATE_TWITT_REQUEST = "twitt/create_twitt_request";
const CREATE_TWITT_SUCCESS = "twitt/create_twitt_success";
const CREATE_TWITT_FAILURE = "twitt/create_twitt_failure";
const LOAD_TWITTS_SUCCESS = "twitt/load_twitts_success";
const LOAD_TWITTS_FAILURE = "twitt/load_twitts_failure";

interface CreateTwittRequest extends Action<typeof CREATE_TWITT_REQUEST> {}
interface CreateTwittSuccess extends Action<typeof CREATE_TWITT_SUCCESS> {
  payload: {
    twitt: Twitt;
  };
}
interface CreateTwittFailure extends Action<typeof CREATE_TWITT_FAILURE> {
  payload: {
    error: string;
  };
}
interface LoadTwittsSuccess extends Action<typeof LOAD_TWITTS_SUCCESS> {
  payload: {
    twitts: Twitt[];
  };
}
interface LoadTwittsFailure extends Action<typeof LOAD_TWITTS_FAILURE> {
  payload: {
    error: string;
  };
}

export const createTwitt = (
  text: string
): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  CreateTwittRequest | CreateTwittSuccess | CreateTwittFailure
> => async (dispatch) => {
  try {
    const response = await axios
      .post("api/twitts", { text: text.trim() })
      .then((res) => res.data.twitt);

    dispatch({ type: CREATE_TWITT_SUCCESS, payload: { twitt: response } });
  } catch (error) {
    dispatch({ type: CREATE_TWITT_FAILURE, payload: { error } });
  }
};

export const loadTwitts = (): ThunkAction<
  Promise<void>,
  RootState,
  undefined,
  LoadTwittsSuccess | LoadTwittsFailure
> => async (dispatch) => {
  try {
    const response = await axios
      .get("api/twitts")
      .then((res) => res.data.twitts);

    console.log("RESP:", response);

    dispatch({ type: LOAD_TWITTS_SUCCESS, payload: { twitts: response } });
  } catch (error) {
    dispatch({ type: LOAD_TWITTS_FAILURE, payload: { error } });
  }
};

export const twittsSelector = (rootState: RootState) => {
  return rootState.twittReducer;
};

//selector func for events
export const selectTwitts = (rootState: RootState) => {
  return twittsSelector(rootState);
};

const initialState = {
  twitts: [
    {
      _id: "",
      content: "",
      author: "",
      createdAt: "",
      updatedAt: "",
    },
  ],
};

export const twittReducer: Reducer<
  TwittsState,
  | CreateTwittRequest
  | CreateTwittSuccess
  | CreateTwittFailure
  | LoadTwittsSuccess
  | LoadTwittsFailure
> = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TWITTS_SUCCESS: {
      console.log("LTS: ", action.payload.twitts);

      return { ...state, twitts: [...action.payload.twitts] };
    }
    case LOAD_TWITTS_FAILURE: {
      return { ...state };
    }
    case CREATE_TWITT_SUCCESS: {
      console.log("CREATE_TWITT_SUCCESS", action.payload);

      return { ...state, twitts: [...state.twitts, action.payload.twitt] };
    }
    case CREATE_TWITT_FAILURE: {
      console.log("CREATE_TWITT_FAILURE", action.payload.error);
      return state;
    }
    default: {
      return state;
    }
  }
};
//TODO: check const response=await axios.post("/twitt",{text}).then(res=>res.data.twitt)
