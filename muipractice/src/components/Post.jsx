import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom: theme.spacing(5)
    },
    media:{
        height: "250px",
        [theme.breakpoints.down("sm")]:{
            height: '150px'
        }
    }
}))

const Post = () => {
    const classes = useStyles();
 
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://static.marquardmedia.hu/data/cikk/188/188001.775x400.jpg"
                title="My Post" />
                <CardContent>
                    <Typography gutterBottom variant='h5'>My Fist Post</Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem laboriosam repellendus, aliquid corporis est culpa dolorem eveniet tenetur beatae nesciunt minus labore ipsum perferendis hic minima non porro! Natus?</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post
