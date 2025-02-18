import axios from "axios";
import { FRIENDS_REQUEST, FRIENDS_SUCCESS, FRIENDS_FAIL } from "../types/authTypes";

export const getFriends = () => async (dispatch) => {
  try {
    dispatch({ type: FRIENDS_REQUEST });

    const { data } = await axios.get("/api/friends");

    dispatch({
      type: FRIENDS_SUCCESS,
      payload: data,
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
