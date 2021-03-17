import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";
// import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import {CircularProgress,} from "@material-ui/core";
import {Alert, AlertTitle} from '@material-ui/lab';


export default function BookList() {

    const [booksList, setBooksList] = useState([]);
    const [errorData, setErrorData] = useState(null);
    const [loading, setLoading] = useState(false);
//
//     async function getData() {
//       ('/data/books.json', {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//             }
//         )
//             .then(function (response) {
//                 console.log(response)
//                 return response.json();
//             })
//             .catch(function (error) {
//                 setErrorData(error);
//             })
//             .finally(function (myJson) {
//                 console.log(myJson);
//                 setLoading(false);
//                 setBooksList(myJson)
//             });
//
//
// // console.log(error);
//         console.log(booksList);
//         console.log(errorData);
//         console.log(loading)
//
//     }


    useEffect(() => {
        setLoading(true);
        async function fetchBooks() {
            await fetch('/data/books.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setLoading(false)
                    setBooksList(data.books)
                })
                .catch(error => {
                    setLoading(false)
                    setErrorData(error)
                });
        }
        fetchBooks()
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