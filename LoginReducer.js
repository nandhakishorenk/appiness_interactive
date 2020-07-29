import {LOGIN, LOGOUT} from './ActionTypes'


const initialState = {
    isLoggedIn: false,
    username: "",
    password: ""
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                username: action.data.username,
                password: action.data.password
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: initialState.isLoggedIn,
                username: initialState.username,
                password: initialState.password
            };
        default:
            return state;
    }
}

export default loginReducer;