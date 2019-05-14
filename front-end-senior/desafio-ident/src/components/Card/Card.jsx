import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import Fab from '@material-ui/core/Fab';
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    title: {
      fontWeight: 700,
      fontSize: 16,
      fontFamily: "'Open Sans', sans-serif"
    },
    fab:{
      top: -29,
      margin: '0 auto',
      color: '#8c388c',
      backgroundColor: '#ffffff',
      border: '3px solid #EAEBED',
      boxShadow: 'none',
      '&$active': {
        boxShadow: 'none'
      },
      '&$hover': {
        backgroundColor: '#f3f3f3'
      }
    },
    active: {},
    icon: {
      fontSize: 35
    },
    card: {
        height: '100%',
        display: 'flex',
        width: 350,
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        position: 'relative',
        padding: '10px 15px',
        top: -25
    }
});
const teste = {
  top: -29,
  margin: '0 auto',
  color: '#8c388c',
  backgroundColor: '#ffffff',
  border: '3px solid #EAEBED',
  '&$active': {
    boxShadow: 'none'
  },
  '&$hover': {
    backgroundColor: '#f3f3f3'
  }
}

function DCard(props){
    const { classes } = props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={props.img}
            title="Image title"
          />
          <Fab color="primary" aria-label="Add" style={teste}>
            <PlayArrowRounded className={classes.icon} />
          </Fab>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} align="center">
                {props.title}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}

DCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(DCard);
