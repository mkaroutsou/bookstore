import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BookList from "../components/BookList";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));



export default function Home() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <BookList/>
        </Container>
    );
}
