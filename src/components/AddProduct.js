import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Fab, FormControl, Input, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

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


export default function AddProduct() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [categoryName, setCategoryName] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChange = (event) => {
        setCategoryName(event.target.value);
    };


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
                    {/*Title*/}
                    <TextField autoFocus required id="title" label="Title" fullWidth className={classes.formControl}/>
                    {/*Description*/}
                    <TextField required id="description" label="Description" multiline rowsMax={4} fullWidth
                               className={classes.formControl} />
                    {/*Categories field*/}
                    <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="categories-label">Categories</InputLabel>
                        <Select
                            labelId="categories-label"
                            multiple
                            displayEmpty
                            value={categoryName}
                            onChange={handleChange}
                            input={<Input/>}
                        >
                            {categories.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/*Authors*/}
                    <TextField required id="author" label="Authors" multiline rowsMax={3} fullWidth
                               className={classes.formControl}/>
                    {/*Publisher*/}
                    <TextField required id="publisher" label="Publisher" fullWidth className={classes.formControl}/>
                    {/*Publication Year*/}
                    <TextField required id="year" label="Publication Year" type="number" fullWidth
                               className={classes.formControl}/>
                    {/*Number of pages*/}
                    <TextField required id="pages" label="Number of pages" type="number" fullWidth
                               className={classes.formControl}/>
                    {/*ISBN-10*/}
                    <TextField required id="isbn-10" label="ISBN-10" type="number" fullWidth
                               className={classes.formControl}/>
                    {/*ISBN-13*/}
                    <TextField required id="isbn-13" label="ISBN-13" type="number" fullWidth
                               className={classes.formControl}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}