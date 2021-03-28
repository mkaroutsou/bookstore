import React, {useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BookList from "../components/BookList";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../components/SearchBar";
import {SearchContext} from "../context/SearchContext";
import {BooksContext} from "../context/BooksContext";


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    search: {
        width: '25ch',
    },
    heroContent: {
        padding: theme.spacing(1, 0, 1),
    },
}));


export default function Home() {
    const classes = useStyles();
    const [books, setBooks] = useContext(BooksContext);
    const [results, setResults] = useState(books);


    // @todo add throttling
    const searchForBook = (e) => {
        let searchString = e.target.value
        let results = books;
        if (searchString) {
            results = books.filter(({title, subtitle}) => 
                title.toLowerCase().search(searchString.toLowerCase()) !== -1 ||
                subtitle.toLowerCase().search(searchString.toLowerCase()) !== -1
            )
        }
        setResults(results);
    };

    return (
        <SearchContext.Provider value={[results, setResults]}>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Home
                    </Typography>
                    <SearchBar className={classes.search} onSearch={searchForBook}/>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <BookList/>
            </Container>
        </SearchContext.Provider>
    );
}
