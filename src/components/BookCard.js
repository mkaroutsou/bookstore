import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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
                    {book.title}
                </Typography>
                <Typography>
                    {book.subtitle}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
}