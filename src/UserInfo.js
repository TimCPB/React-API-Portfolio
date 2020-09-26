import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import { blue } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function UserInfo(props) {
  const classes = useStyles();
  return (
    <Card className="UserInfo" variant="outlined">
      <CardContent>
        <Avatar className={classes.purple}>TB</Avatar>{props.data.name}
        <Typography variant="body2" color="textSecondary" component="p">
            {props.data.bio}
        </Typography>
        <TwitterIcon style={{color: blue[500]}} />{props.data.twitter_username}<br></br>
        <LocationOnIcon style={{color: blue[500]}} /> {props.data.location}

      </CardContent>
    </Card>
  )
}

export default UserInfo