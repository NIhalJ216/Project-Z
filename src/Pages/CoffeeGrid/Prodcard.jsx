import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@mui/icons-material/Share';

const useStyles = makeStyles({
    Card: {
        height: 540,
    },
});


const Prodcard = (props) => {
    const classes = useStyles(props);
    const { avatarUrl, title, subtitle, description, imageUrl } = props;
    return (
        <Card className={classes.Card} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar src={avatarUrl} />
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia style={{ height: "150px" }} image={imageUrl} />
            <CardContent>

                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" color="primary">Buy now</Button>
                <Button size="small" variant="outlined" color="primary">Offer</Button>
            </CardActions>
        </Card>
    )
}

export default Prodcard;
