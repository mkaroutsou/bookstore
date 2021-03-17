import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Book from '@material-ui/icons/Book';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "./Footer";
import HeroContent from "./HeroContent";
// import BookCard from "./BookCard";
import Breadcrumb from "./Breadcrumb";
import BookList from "./BookList";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Layout() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <Book className={classes.icon}/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Our Bookstore
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <HeroContent pageTitle={"Home"}/>
                    <Breadcrumb/>
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <BookList />
                    </Container>
                </main>
                <Footer/>
            </div>
        </React.Fragment>
    );
}