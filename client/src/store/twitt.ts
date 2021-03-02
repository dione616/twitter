import { RootState } from "./index";
import { Twitt } from "./../lib/types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

const CREATE_TWITT_REQUEST = "twitt/create_twitt_request";
const CREATE_TWITT_SUCCESS = "twitt/create_twitt_success";
const CREATE_TWITT_FAILURE = "twitt/create_twitt_failure";

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
      .post("/twitt", { text })
      .then((res) => res.data.twitt);

    dispatch({ type: CREATE_TWITT_SUCCESS, payload: { twitt: response } });
  } catch (error) {
    dispatch({ type: CREATE_TWITT_FAILURE, payload: { error } });
  }
};

const initialState = {
  twitts: [
    {
      _id: "",
      text: "",
      author: "",
      likes: "",
      comments: "",
    },
  ],
};

export const twittReducer = (
  state = initialState,
  action: CreateTwittSuccess | CreateTwittFailure
) => {
  switch (action.type) {
    case CREATE_TWITT_SUCCESS: {
      console.log("CREATE_TWITT_SUCCESS", action.payload);

      return state;
    }
    case CREATE_TWITT_FAILURE: {
      console.log("CREATE_TWITT_FAILURE", action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
};
//TODO: check const response=await axios.post("/twitt",{text}).then(res=>res.data.twitt)
