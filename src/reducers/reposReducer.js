const SET_POSTS = "SET_POSTS";

const defaultState = {
    posts: []
}

export default function reposReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, payload:posts});