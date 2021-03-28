import React , {useState} from "react";
import Layout from "./components/Layout";
import {HashRouter} from "react-router-dom";
import './App.css';
import 'fontsource-roboto';
import {BooksContext} from "./context/BooksContext";
import data from "./data/books.json";

export default function App() {
    const [books, setBooks] = useState(data.books);

    return (
        <div className="App">
            <BooksContext.Provider value={[books, setBooks]}>
                <HashRouter>
                    <Layout/>
                </HashRouter>
            </BooksContext.Provider>
        </div>
    );
}
