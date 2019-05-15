import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    padding: "0 25px",
    backgroundColor: "#943E95",
    margin: "0 auto",
    marginTop: 20,
    display: "block",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      backgroundColor: "#6e166f"
    }
  },
  label: {
    textTransform: "capitalize",
    fontSize: 12
  }
};

function ButtonBasic(props) {
  const { classes, children } = props;

  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label // class name, e.g. `classes-nesting-label-x`
      }}
    >
      {children}
    </Button>
  );
}

ButtonBasic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonBasic);
