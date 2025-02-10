import axios from "axios";

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
    console.log(response.data, "data");
  } catch (error) {
    console.log(error, "error");
  }
};
