import { jwtDecode } from "jwt-decode";

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

const authReducer = (state = authState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_REGISTER_SUCCESS":
      const myInfo = tokenDecoded(payload.token);
      state = {
        authenticate: true,
        token: payload.token,
        message: payload.message,
        loading: false,
        myInfo: myInfo,
      };
      break;
    case "USER_REGISTER_FAILURE":
      state = {
        token: null,
        authenticate: false,
        loading: false,
        error: payload,
      };
      break;
    case "USER_REGISTER_FAILURE_SERVER":
      state = {
        token: null,
        authenticate: false,
        loading: false,
        error: payload.errors,
      };
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;
