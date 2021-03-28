import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Book from '@material-ui/icons/Book';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import {NavLink, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import BookPage from "../pages/BookPage";
import {Link} from "@material-ui/core";

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
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(4),
    },
    logo: {
        color: '#fff',
        textDecoration: 'none'
    }
}));


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
                            <NavLink to="/" className={classes.logo}>Our Bookstore</NavLink>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <Breadcrumb/>
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/book/:isbn" component={BookPage}/>
                        </Switch>
                    </Container>
                </main>
                <Footer/>
            </div>
        </React.Fragment>
    );
}