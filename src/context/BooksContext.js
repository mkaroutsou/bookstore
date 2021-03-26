import React, { createContext, useReducer } from 'react'
import data from '../data/books.json';

export const BooksContext = createContext();
const books = data.books

const reducer = (state, pair) => ({ ...state, ...pair })

const initialState = {books}

export function BooksProvider(props) {
    const [state, updateBooks] = useReducer(reducer, initialState)

    return (
        <BooksContext.Provider value={{ state, updateBooks }}>
            {props.children}
        </BooksContext.Provider>
    )
}