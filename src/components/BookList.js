import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, {useContext, useEffect, useState} from "react";
import {CircularProgress,} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {BooksContext} from '../App';
import {SearchContext} from "../pages/Home";

const searchForBook = ({title, subtitle}, searchBook) => (
    title.toLowerCase().search(searchBook.toLowerCase()) !== -1 ||
    subtitle.toLowerCase().search(searchBook.toLowerCase()) !== -1
);

export default function BookList() {
    const [booksList, setBooksList] = useState([]);
    const [errorData, setErrorData] = useState(null);
    const [loading, setLoading] = useState(false);
    const books = useContext(BooksContext);
    const searchBookTitle = useContext(SearchContext);

    useEffect(() => {
        setLoading(true);
        if (books.length > 0) {
            setLoading(false);
            setBooksList(books)

            if (searchBookTitle !== '') {
                let results = books.filter((book) => searchForBook(book, searchBookTitle));
                if (results.length > 0) {
                    setBooksList(results)
                } else {
                    setErrorData("No results available. Search again")
                }
            }

            if (searchBookTitle === '') {
                setErrorData(null)
                setBooksList(books)
            }

        } else {
            setLoading(false)
            setErrorData("No books available")
        }

    }, [books, searchBookTitle]);


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
        <Grid container spacing={4}>
            {booksList.map((book) => (
                <Grid item key={book.isbn} xs={12} sm={6} md={3}>
                    <BookCard book={book}/>
                </Grid>
            ))}
        </Grid>
    )
}