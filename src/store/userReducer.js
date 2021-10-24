import {SET_AUTH} from "../utils/consts";

const defaultState = {
    isAuth: false
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
};

export const setAuthAction = isAuth => ({type: SET_AUTH, payload: isAuth})