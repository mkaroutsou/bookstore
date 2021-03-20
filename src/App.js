import './App.css';
import 'fontsource-roboto';
import React from "react";
import Layout from "./components/Layout";
import {HashRouter} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
        <HashRouter>
            <Layout />
        </HashRouter>
    </div>
  );
}
