import axios from "axios";

export const userRegister = (user) => async (dispatch) => {
    try {
        dispatch({ type: "USER_REGISTER_REQUEST" });
    
        const config = {
        headers: {
            "Content-Type": "application/json",
        },
        };
    
        const { data } = await axios.post('/api/messenger/user-register', user, config);
        console.log(data, 'data');
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
        type: "USER_REGISTER_FAIL",
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });

        console.log(error, 'error');
    }
}