import React from "react";
import {Breadcrumbs, Link, makeStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";

function handleClick() {
    console.log('yolo');
}

const useStyles = makeStyles((theme) => ({
    breadcrumb: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));


export default function Breadcrumb() {
    const classes = useStyles();

    return (
        <Container className={classes.breadcrumb} maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Link
                    color="textPrimary"
                    href="/components/breadcrumbs/"
                    onClick={handleClick}
                    aria-current="page"
                >
                    Breadcrumb
                </Link>
            </Breadcrumbs>
        </Container>
    )
}