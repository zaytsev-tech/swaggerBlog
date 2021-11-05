const SET_POSTS = "SET_POSTS";
const SET_LOGIN = "SET_LOGIN";

const defaultState = {
    posts: [],
    login: ''
}

export default function reposReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, payload:posts});
export const setLogin = (token) => ({type: SET_LOGIN, payload:token});