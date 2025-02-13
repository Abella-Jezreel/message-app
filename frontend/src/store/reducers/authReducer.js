import { jwtDecode } from "jwt-decode";
import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_FAIL_SERVER, LOGOUT } from "../types/authTypes";

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

if(getToken) {
  const myInfo = tokenDecoded(getToken);
  if(myInfo) {
    authState.authenticate = true;
    authState.loading = false;
    authState.myInfo = myInfo;
  }
}

const authReducer = (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      const myInfo = tokenDecoded(payload.token);
      state = {
        authenticate: true,
        token: payload.token,
        message: payload.message,
        loading: false,
        myInfo: myInfo,
      };
      break;
    case REGISTER_FAIL:
      state = {
        token: null,
        authenticate: false,
        loading: false,
        error: payload,
      };
      break;
    case REGISTER_FAIL_SERVER:
      state = {
        token: null,
        authenticate: false,
        loading: false,
        error: payload.errors,
      };
      break;
    case LOGOUT:
      state = {
        token: null,
        authenticate: false,
        loading: false,
        myInfo: "",
      };
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;
