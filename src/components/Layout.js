import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Book from '@material-ui/icons/Book';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import { Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import BookPage from "../pages/BookPage";
import SearchBar from "./SearchBar";
import AddProduct from "./AddProduct";
// import debounce from 'lodash.debounce';
// import {Paper} from "@material-ui/core";
// import AddProduct from "./AddProduct";

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
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    search: {
        width: '25ch',
    }
}));

export const SearchContext = React.createContext('');

export default function Layout() {
    const classes = useStyles();
    const [searchBook, setSearchBook] = useState('');

    // @todo add throttling
    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchBook(e.target.value)
        // return debounce(() => setSearchBook(e.target.value), 500);
        // useThrottle(() => console.log(e.target.value), 1000, [e.target.value]);

    };


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
                <SearchContext.Provider value={searchBook}>
                    <main>
                        <div className={classes.heroContent}>
                            <Container maxWidth="sm">
                                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Home
                                </Typography>
                                <SearchBar className={classes.search} onSearch={handleSearch}/>
                            </Container>
                        </div>
                        <Breadcrumb/>
                        <Container className={classes.cardGrid} maxWidth="lg">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/book/:isbn" component={BookPage}/>
                                {/*<Route exact path="/category/:tag" component={CategoryPage} />*/}
                                {/*<Route component={NotFound} />*/}
                            </Switch>
                            <AddProduct />
                        </Container>
                    </main>
                </SearchContext.Provider>
                <Footer/>
            </div>
        </React.Fragment>
    );
}