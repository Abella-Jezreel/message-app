import { FRIENDS_REQUEST, FRIENDS_SUCCESS, FRIENDS_FAIL } from "../types/authTypes";

const messengerFriendsState = {
  friends: [],
  loading: false,
  error: null,
};

const messengerFriendsReducer = (state = messengerFriendsState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FRIENDS_REQUEST:
        return {
            ...state,
            loading: true,
        };
        case FRIENDS_SUCCESS:
        return {
            ...state,
            friends: payload,
            loading: false,
        };
        case FRIENDS_FAIL:
        return {
            ...state,
            error: payload,
            loading: false,
        };
        default:
        return state;
    }
    };

export default messengerFriendsReducer;