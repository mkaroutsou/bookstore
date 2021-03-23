import React from "react";
import Layout from "./components/Layout";
import {HashRouter} from "react-router-dom";
import './App.css';
import 'fontsource-roboto';
import data from './data/books.json';

export const BooksContext = React.createContext(data.books);


export default function App() {
    return (
        <div className="App">
            <HashRouter>
                <BooksContext.Provider value={data.books}>
                    <Layout/>
                </BooksContext.Provider>
            </HashRouter>
        </div>
    );
}
