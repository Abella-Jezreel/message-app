import axios from "axios";
import {
  FRIENDS_REQUEST,
  FRIENDS_SUCCESS,
  FRIENDS_FAIL,
} from "../types/authTypes";

export const getFriends = (email) => async (dispatch) => {
  try {
    dispatch({ type: FRIENDS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/messenger/get-friends`,
      email,
      config
    );

    const friends = data.friends;
    dispatch({
      type: FRIENDS_SUCCESS,
      payload: friends,
    });
  } catch (error) {
    dispatch({
      type: FRIENDS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
