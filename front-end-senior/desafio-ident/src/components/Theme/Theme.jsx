import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import MultiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  defaultColor: "#2962ff",
  secondaryColor: "#90d528"
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      '"Open Sans"',
      'Roboto'
    ].join(','),
  }
});

const styles = theme => ({
  sectionContainer: {
  }
});

const Container = props => {
  const { classes, ...otherProps } = props;

  return (
    <MultiThemeProvider theme={theme}>
      <section className={classes.sectionContainer}>{props.children}</section>
    </MultiThemeProvider>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired
};

export default withStyles(styles)(Container);
