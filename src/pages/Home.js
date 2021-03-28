import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BookList from "../components/BookList";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../components/SearchBar";
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

export const SearchContext = React.createContext('');

export default function Home() {
    const classes = useStyles();
    const [searchBook, setSearchBook] = useState(null);

    // @todo add throttling
    const handleSearch = (e) => {
        setSearchBook(e.target.value)
    };

    return (
        <SearchContext.Provider value={searchBook}>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Home
                    </Typography>
                    <SearchBar className={classes.search} onSearch={handleSearch}/>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <BookList/>
            </Container>
        </SearchContext.Provider>
    );
}
