import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_FAIL_SERVER, LOGIN_SUCCESS, LOGIN_FAIL ,LOGOUT } from "../types/authTypes";


export const userRegister = (user) => async (dispatch) => {
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

export const logout = () => (dispatch) => {
  localStorage.removeItem("authToken");
  dispatch({ type: LOGOUT });
};

export const userLogin = (user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/messenger/user-login`,
      user,
      config
    );
    const { token } = response.data;
    localStorage.setItem("authToken", token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data });
    }
  }
};

