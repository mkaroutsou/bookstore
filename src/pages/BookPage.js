import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from "react-router-dom";
import data from '../data/books.json';
import {Avatar, Box, CircularProgress, List, ListItem, ListItemText, Paper} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {deepPurple} from "@material-ui/core/colors";
import Carousel from "react-material-ui-carousel";
import BookCard from "../components/BookCard";


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
    },
    media: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    button: {
        margin: theme.spacing.unit,
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

    useEffect(() => {
        setLoading(true)
        if (data.books.find(x => x.isbn === isbn)) {
            setLoading(false);
            setBook(data.books.find(x => x.isbn === isbn));
        } else {
            setLoading(false);
            setErrorData("No book available");
        }
    }, [isbn]);


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
        <Grid container maxWidth="lg">
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
                    <ListItem><ListItemText xs={12} primary={`Categories: #tag 1, #tag 2`}/></ListItem>
                    <ListItem><ListItemText xs={12} primary={`Year: ${book.published}`}/></ListItem>
                    <ListItem><ListItemText xs={12} primary={`Pages: ${book.pages}`}/></ListItem>
                </List>

                <Button variant="contained" color="primary" size="large" className={classes.button}>
                    BUY
                </Button>
            </Grid>
            <Grid item md={12}>
                <Carousel item xs={12}>
                    {
                        data.books.map( (item, i) => <Grid item xs={4}><BookCard key={i} book={item} /></Grid> )
                    }
                </Carousel>
            </Grid>
        </Grid>
    );
}