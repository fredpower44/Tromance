import React, { useState, useEffect }from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 280,
  },
});

export default function MatchCard(props) {
  // console.log(props);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="require('../../public/1.png')"
          title="Match"
        />
        <CardContent>
          <div style={{display: "flex"}}>
            <Typography gutterBottom variant="h6" component="h2" style={{width: "50%"}}>
              {props.name + " (" + props.age + ")"}
            </Typography>
            <Typography gutterBottom variant="h6" style={{width: "50%", color: "#FF6584"}}>
              {props.matchPercent + " % compatible"}
            </Typography>
          </div>
            
          
          <Typography variant="body2" color="textSecondary" component="p">
            {"Major: " + props.major}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}