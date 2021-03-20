import React from "react";
import {Breadcrumbs, makeStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {NavLink} from "react-router-dom";

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
                <NavLink color="inherit" to="/" onClick={handleClick}>
                    Home
                </NavLink>
                {/*<Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>*/}
                {/*    Core*/}
                {/*</Link>*/}
                <NavLink
                    color="textPrimary"
                    to="/dummy"
                    aria-current="page"
                >
                    Dummy
                </NavLink>
            </Breadcrumbs>
        </Container>
    )
}