const GET_USER = "GET_USER";

const defaultState = {
    items: [],
    isFetching: true
}

export default function reposReducer(state = defaultState, action) {
    switch(action.type) {
        default:
            return state;
    }
}