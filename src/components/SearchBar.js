import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SearchBar({onSearch}) {
    return (
        <form noValidate autoComplete="off">
            <TextField id="outlined-basic"
                       label="Search for a book title"
                       variant="outlined"
                       placeholder="Type the book title"
                       fullWidth
                       onChange={onSearch}/>
        </form>
    );
}
