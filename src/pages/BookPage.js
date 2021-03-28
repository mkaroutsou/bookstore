import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import {Avatar, Box, CircularProgress, List, ListItem, ListItemText, Paper} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {deepPurple} from "@material-ui/core/colors";
import {BooksContext} from "../context/BooksContext";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    media: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    avatar: {
        margin: 10,
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
}));

export default function BookPage() {
    const classes = useStyles();
    const {isbn} = useParams()
    const [book, setBook] = useState([])
    const [errorData, setErrorData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useContext(BooksContext);

    useEffect(() => {
        setLoading(true)
        console.log(books)
        if (books.find(x => x.isbn === isbn)) {
            setLoading(false);
            setBook(books.find(x => x.isbn === isbn));
        } else {
            setLoading(false);
            setErrorData("No book available");
        }
    }, [books, isbn]);

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

    const categories = (book.categoryName && book.categoryName.length > 0) ? book.categoryName.join(', ') : null

    return (
        <Grid container maxwidth="lg" className={classes.cardGrid}>
            <Grid item md={4}>
                <Paper variant="outlined">
                    <img src="https://picsum.photos/400/400" alt="{book.title}"/>
                </Paper>
                <Box display="flex" alignItems="center">
                    <Avatar className={classes.purpleAvatar}>{book.author?.substr(0, 1)}</Avatar>{book.author}
                </Box>
            </Grid>
            <Grid item md={6}>
                <Typography variant="h1" color="textSecondary">{book.title}</Typography>
                <Typography variant="body1">{book.description}</Typography>

                <Box display="flex" alignItems="center" justifyContent="center">
                    <Button variant="outlined" color="primary" size="small" className={classes.button}>
                        Follow
                    </Button>
                    <Button variant="outlined" color="secondary" size="small" className={classes.button}>
                        Share
                    </Button>
                </Box>

                <List>
                    {categories
                        ? <ListItem><ListItemText xs={12} primary={`Categories: ${categories}`}/></ListItem>
                        : ''
                    }
                    <ListItem><ListItemText xs={12} primary={`Year: ${book.published}`}/></ListItem>
                    <ListItem><ListItemText xs={12} primary={`Pages: ${book.pages}`}/></ListItem>
                </List>

                <Button variant="contained" color="primary" size="large" className={classes.button}>
                    BUY
                </Button>
            </Grid>
            {/*<Grid item md={12}>*/}
            {/*    <Carousel item xs={12}>*/}
            {/*        {*/}
            {/*            books.map( (item, i) => <Grid item xs={4}><BookCard key={i} book={item} /></Grid> )*/}
            {/*        }*/}
            {/*    </Carousel>*/}
            {/*</Grid>*/}
        </Grid>
    );
}