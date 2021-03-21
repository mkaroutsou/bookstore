import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export  default function BookCard({book}) {

    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image="https://picsum.photos/400/400"
                title="{book.title}"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    <Link to={`/book/${book.isbn}`}>{book.title}</Link>
                </Typography>
                <Typography>
                    {book.subtitle}
                </Typography>
            </CardContent>
        </Card>
    )
}