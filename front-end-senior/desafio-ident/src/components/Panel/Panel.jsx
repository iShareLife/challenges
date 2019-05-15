/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { FabPlay, ViewsCount, UpVote, DownVote, Clock, ButtonBasic } from "components";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/logo.png'; 

const styles = theme => ({
  title: {
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "'Open Sans', sans-serif",
    paddingTop: 10
  },
    subtitle: {
    fontWeight: 400,
    fontSize: 10,
    fontFamily: "'Open Sans', sans-serif"
  },
  base: {
    marginBottom: 10
  },
  icon: {
    textAlign: "right"
  }
});

function Panel(props){
    const { classes,children, showLogo } = props;
    return (
      <div>
        <div className={classes.base}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography className={classes.title} align="left">
              {props.title}
            </Typography>
            <Typography className={classes.subtitle} align="left">
              {props.subtitle}
            </Typography>
          </Grid>
          {showLogo && 
            <Grid item xs={6} className={classes.icon}>
             <img src={logo} height="32" width="100" />
            </Grid>
          }
        </Grid>
        </div>
        {children}
      </div>
    );
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(Panel);
