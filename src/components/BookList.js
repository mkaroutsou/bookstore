import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, {useContext, useEffect, useState} from "react";
import {CircularProgress,} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import AddBook from "./AddBook";
import {SearchContext} from "../context/SearchContext";
import {BooksContext} from "../context/BooksContext";


export default function BookList() {
    const [errorData, setErrorData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useContext(BooksContext);
    const [results, setResults] = useContext(SearchContext);

    useEffect(() => {
        setLoading(true);

        if (results.length > 0) {
            setLoading(false);
            setErrorData(null)
        } else {
            setLoading(false)
            setErrorData("No books available")
        }

    }, [results, setResults, books, setBooks]);

    const addBook = async (newBook) => {
        console.log('er')
        setBooks([...books, newBook]);
        setResults(books)
    };


    if (loading) {
        return <CircularProgress/>
    }

    if (errorData) {
        return (
            <Alert severity="error">
                {errorData}
            </Alert>
        )
    }

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                {results.map((book) => (
                    <Grid item key={book.isbn} xs={12} sm={6} md={3}>
                        <BookCard book={book}/>
                    </Grid>
                ))}
            </Grid>
            <AddBook addBook={addBook}/>
        </React.Fragment>
    )
}