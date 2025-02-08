import axios from "axios";

export const userRegister = (user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
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
