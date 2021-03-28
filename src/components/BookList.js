import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
import React, {useContext, useEffect, useState} from "react";
import {CircularProgress,} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import AddBook from "./AddBook";
import {SearchContext} from "../pages/Home";
import {BooksContext} from "../context/BooksContext";


export default function BookList() {
    const searchBookTitle = useContext(SearchContext);
    const [errorData, setErrorData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useContext(BooksContext);


    useEffect(() => {
        setLoading(true);

        if (books.length > 0) {
            setLoading(false);

            if (searchBookTitle && searchBookTitle !== '') {
                let results = books.filter((book) => searchForBook(book, searchBookTitle));
                if (results.length > 0) {
                    setBooks(results)

                } else {
                    setErrorData("No results available. Search again")
                }
            }

            if (searchBookTitle && searchBookTitle === '') {
                setErrorData(null)
                setBooks(books)
            }

        } else {
            setLoading(false)
            setErrorData("No books available")
        }

    }, [books, setBooks, searchBookTitle]);

    const addBook = async (newBook) => {
        setBooks([...books, newBook]);
    };

    const searchForBook = ({title, subtitle}, searchBook) => {
        // if (searchBook) {
            return (
                title.toLowerCase().search(searchBook.toLowerCase()) !== -1 ||
                subtitle.toLowerCase().search(searchBook.toLowerCase()) !== -1
            )
        // }
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
                {books.map((book) => (
                    <Grid item key={book.isbn} xs={12} sm={6} md={3}>
                        <BookCard book={book}/>
                    </Grid>
                ))}
            </Grid>
            <AddBook addBook={addBook}/>
        </React.Fragment>
    )
}