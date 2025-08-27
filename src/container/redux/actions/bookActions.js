import { ActionTypes } from '../constants/actionTypes.js';
export const setBooks = (books) => {
    return {
        type: ActionTypes.SET_BOOKS,
        payload: books
    }
}
export const selectedBooks = (books) => {
    return {
        type: ActionTypes.SELECTED_BOOKS,
        payload:books
    }
}
export const removeSelectedBooks = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_BOOKS,
    }
}
export const searchBooks = (books) => {
    return {
        type: ActionTypes.SEARCH_BOOKS,
        payload:books
    }
}