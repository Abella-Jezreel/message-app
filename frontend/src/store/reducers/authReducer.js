import { jwtDecode } from "jwt-decode";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_FAIL_SERVER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../types/authTypes";

const authState = {
  token: null,
  authenticate: false,
  loading: true,
  error: [],
  message: "",
  myInfo: "",
};

const tokenDecoded = (token) => {
  const decoded = jwtDecode(token);
  const expTime = new Date(decoded.exp * 1000);
  if (new Date() > expTime) {
    return null;
  } else {
    return decoded;
  }
};

const getToken = localStorage.getItem("authToken");

if (getToken) {
  const myInfo = tokenDecoded(getToken);
  if (myInfo) {
    authState.authenticate = true;
    authState.loading = false;
    authState.myInfo = myInfo;
  }
}

const authReducer = (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      const myInfoRegister = tokenDecoded(payload.token);
      return {
        ...state,
        authenticate: true,
        token: payload.token,
        message: payload.message,
        loading: false,
        myInfo: myInfoRegister,
      };
    case LOGIN_SUCCESS:
      const myInfoLogin = tokenDecoded(payload.token);
      return {
        ...state,
        authenticate: true,
        token: payload.token,
        message: payload.message,
        loading: false,
        myInfo: myInfoLogin,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        authenticate: false,
        loading: false,
        error: payload,
      };
    case REGISTER_FAIL_SERVER:
      return {
        ...state,
        token: null,
        authenticate: false,
        loading: false,
        error: payload.errors,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        authenticate: false,
        loading: false,
        myInfo: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        authenticate: false,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
