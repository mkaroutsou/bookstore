import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export default function Dummy() {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                "Yolo SPA"
            </Typography>
        </Container>
    );
}