import { booksReducer,booksDetailsReducer,booksSearchReducer } from "./book-reducer";
import { combineReducers } from "redux"
export const reducers = combineReducers({
    allBooks: booksReducer,
    books: booksDetailsReducer,
    booksSearch:booksSearchReducer
})