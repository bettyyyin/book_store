import { Reducer } from 'redux';
import initialBooksData from './books.json'
const _ = require('lodash');

export interface Book {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
}

interface BooksState {
    books: Book[];
}

const initialState: BooksState = {
    books: _.map(initialBooksData, (item: Book) => ({ ...item, id: _.uniqueId() }))
}

const booksReducer: Reducer<BooksState, { type: string; payload: Book }> = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        case "UPDATE_BOOK":
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload.id ? action.payload : book)
            }
        case "DELETE_BOOK":
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default booksReducer;
