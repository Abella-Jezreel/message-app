import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_FAIL_SERVER } from "../types/authTypes";


export const userRegister = (user) => async (dispatch) => {
  console.log(user, "userDispatch");
  try {
    const config = {
      headers: {
        // "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/messenger/user-register`,
      user,
      config
    );
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    localStorage.setItem("authToken", response.data.token);
  } catch (error) {
    if (error.response) {
      dispatch({ type: REGISTER_FAIL_SERVER, payload: error.response.data });
    } else {
      dispatch({ type: REGISTER_FAIL, payload: { errors: error.message }});
    }
  }
};
