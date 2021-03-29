import React, {useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BookList from "../components/BookList";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../components/SearchBar";
import {SearchContext} from "../context/SearchContext";
import {BooksContext} from "../context/BooksContext";
import debounce from 'lodash.debounce';


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

    const debouncedSearch = debounce((e) => {
        let searchString = e.target.value
        let searchResults = books;
        if (searchString) {
            searchResults = books.filter(({title, subtitle}) =>
                title.toLowerCase().search(searchString.toLowerCase()) !== -1 ||
                subtitle?.toLowerCase().search(searchString.toLowerCase()) !== -1
            )
        }
        setResults(searchResults);
    }, 1000)

    return (
        <SearchContext.Provider value={[results, setResults]}>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Home
                    </Typography>
                    <SearchBar className={classes.search} onSearch={debouncedSearch}/>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <BookList/>
            </Container>
        </SearchContext.Provider>
    );
}
