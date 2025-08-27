import { ActionTypes } from "../constants/actionTypes";
const initialState = {
    books: [],
    searchBook:[]
}

export const booksReducer = (state = initialState, { type, payload }) => {
    if (type === ActionTypes.SET_BOOKS) {
        return {...state, books:payload};
    }
    return state;
}
export const booksDetailsReducer = (state={ }, { type, payload }) => {
    if (type === ActionTypes.SELECTED_BOOKS) {
        return { ...state, ...payload };
    }
    if (type === ActionTypes.REMOVE_SELECTED_BOOKS) {
        return { };
    }
    return state;
}
export const booksSearchReducer = (state = initialState, { type, payload }) => {
     if (type === ActionTypes.SEARCH_BOOKS) {
        return {...state, searchBook:payload};
    }
    return state;
}