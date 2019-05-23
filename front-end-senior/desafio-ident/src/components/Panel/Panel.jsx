/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/logo.png";

const styles = theme => ({
  title: {
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "'Open Sans', sans-serif",
    paddingTop: 10
  },
  subtitle: {
    fontWeight: 400,
    fontSize: 12,
    fontFamily: "'Open Sans', sans-serif",
    padding: "14px 0 0 10px",
    color: "#999999",
    fontWeight: 500,
    fontStyle: "italic"
  },
  base: {
    marginBottom: 20
  },
  icon: {
    textAlign: "right"
  },
  gridtitle: {
    display: "inline-flex"
  }
});

function Panel(props) {
  const { classes, children, showLogo } = props;
  return (
    <div>
      <div className={classes.base}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className={classes.gridtitle}>
              <Typography
                className={classes.title}
                align="left"
                component="span"
              >
                {props.title} 
              </Typography>
              <Typography
                className={classes.subtitle}
                align="left"
                component="span"
              >
                {props.subtitle}
              </Typography>
            </div>
          </Grid>

          {showLogo && (
            <Grid item xs={6} className={classes.icon}>
              <img src={logo} height="32" width="100" />
            </Grid>
          )}
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
