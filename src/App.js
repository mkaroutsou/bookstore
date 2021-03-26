import React from "react";
import Layout from "./components/Layout";
import {HashRouter} from "react-router-dom";
import './App.css';
import 'fontsource-roboto';
import {BooksProvider} from "./context/BooksContext";


export default function App() {
    return (
        <div className="App">
            <HashRouter>
                <BooksProvider>
                    <Layout/>
                </BooksProvider>
            </HashRouter>
        </div>
    );
}
