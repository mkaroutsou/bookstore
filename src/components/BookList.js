import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, {useEffect, useState} from "react";
import {CircularProgress,} from "@material-ui/core";
import data from '../data/books.json';
import {Alert, AlertTitle} from "@material-ui/lab";

export default function BookList() {
    const [booksList, setBooksList] = useState([]);
    const [errorData, setErrorData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (data.books.length > 0) {
            setLoading(false);
            setBooksList(data.books)
        } else{
            setLoading(false)
            setErrorData("No books available")
        }
    }, []);


    if (loading) {
        return <CircularProgress/>
    }


    if (errorData) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorData}>
            </Alert>
        )
    }

    return (
        <Grid container spacing={4}>
            {booksList.map((book) => (
                <Grid item key={book.isbn} xs={12} sm={6} md={3}>
                    <BookCard book={book}/>
                </Grid>
            ))}
        </Grid>
    )
}