import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Fab, FormControl, Input, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(4),
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

const categories = [
    'Category 1',
    'Category 2',
    'Category 3',
];


export default function AddBook({addBook}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const initialInputState = {
        title: "",
        description: "",
        categoryName: [],
        author: "",
        publisher: "",
        published: "",
        pages: "",
        isbn10: "",
        isbn: ""
    };
    const [eachEntry, setEachEntry] = useState(initialInputState);
    const {title, description, categoryName, author, publisher, published, pages, isbn10, isbn} = eachEntry;

    const handleInputChange = e => {
        setEachEntry({...eachEntry, [e.target.name]: e.target.value});
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        addBook(eachEntry);
        setEachEntry(initialInputState);
        setOpen(false);
    }

    return (
        <div>
            <Fab
                variant="extended"
                color="primary"
                size="large"
                className={classes.button}
                onClick={handleClickOpen}
            >
                <SaveIcon className={classes.extendedIcon}/>
                Create New Product
            </Fab>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create a new Product, please fill the following fields.
                    </DialogContentText>
                    <ValidatorForm onSubmit={handleSubmit}>

                        {/*Title*/}
                        <TextValidator autoFocus name="title" label="Title" value={title} fullWidth
                                       className={classes.formControl} onChange={handleInputChange}
                                       validators={['minStringLength:10', 'maxStringLength:120', 'matchRegexp:([\\w!@"&*])']}
                                       errorMessages={['too small', 'too big', 'invalid character']}/>

                        {/*/!*Description*!/*/}
                        <TextValidator required name="description" label="Description" value={description} multiline
                                       rowsMax={4} fullWidth className={classes.formControl}
                                       onChange={handleInputChange}
                                       validators={['maxStringLength:520', 'matchRegexp:^[A-Z]']}
                                       errorMessages={['too big', 'must start with capital letter']}/>

                        {/*Categories field*/}
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="categories-label">Categories</InputLabel>
                            <Select
                                labelId="categories-label"
                                multiple
                                displayEmpty
                                name="categoryName"
                                value={categoryName}
                                onChange={handleInputChange}
                                input={<Input/>}
                                validators={['required']}
                                errorMessages={['is required']}>
                                {categories.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/*Authors*/}
                        <TextValidator required name="author" label="Authors" value={author} multiline rowsMax={3}
                                       fullWidth className={classes.formControl} onChange={handleInputChange}
                                       validators={['minStringLength:5', 'maxStringLength:60']}
                                       errorMessages={['too small', 'too big']}/>

                        {/*Publisher*/}
                        <TextValidator required name="publisher" label="Publisher" value={publisher} fullWidth
                                       className={classes.formControl} onChange={handleInputChange}
                                       validators={['minStringLength:5', 'maxStringLength:60']}
                                       errorMessages={['too small', 'too big']}/>
                        {/*Publication Year*/}
                        <TextValidator required name="published" label="Publication Year" value={published} type="number"
                                       fullWidth className={classes.formControl} onChange={handleInputChange}
                                       validators={['minNumber:1000', 'maxNumber:9999']}
                                       errorMessages={['invalid year', 'invalid year']}/>

                        {/*Number of pages*/}
                        <TextValidator required name="pages" label="Number of pages" value={pages} type="number"
                                       fullWidth className={classes.formControl} onChange={handleInputChange}
                                       validators={['maxNumber:9999']} errorMessages={['too many pages']}/>

                        {/*ISBN-10*/}
                        <TextValidator required name="isbn10" label="ISBN-10" value={isbn10} type="number" fullWidth
                                       className={classes.formControl} onChange={handleInputChange}
                                       validators={['minNumber:1000000000', 'maxNumber:9999999999']}
                                       errorMessages={['invalid isbn', 'invalid isbn']}/>

                        {/*ISBN-13*/}
                        <TextValidator required name="isbn" label="ISBN-13" value={isbn} type="number" fullWidth
                                       className={classes.formControl} onChange={handleInputChange}
                                       validators={['minNumber:1000000000000', 'maxNumber:9999999999999']}
                                       errorMessages={['invalid isbn', 'invalid isbn']}/>
                    </ValidatorForm>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}