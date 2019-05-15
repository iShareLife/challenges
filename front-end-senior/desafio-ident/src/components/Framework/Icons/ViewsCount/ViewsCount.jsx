import React from "react";
import VisibilitySharp from "@material-ui/icons/VisibilitySharp";
import PropTypes from "prop-types";

const styles = {
  container: {
    display: "flex",
    margin: "0 auto"
  },
  base: {
    color: "#999999"
  },
  icon: {
    fontSize: 14
  },
  count: {
    fontSize: 12,
    fontFamily: "'Open Sans', sans-serif",
    marginLeft: 5,
    display: 'inline-block'
  }
};

function ViewsCount(props) {
  return (
    <div style={styles.container}>
      <VisibilitySharp style={{ ...styles.base, ...styles.icon }} />
      <div style={{ ...styles.base, ...styles.count }}>{props.count}</div>
    </div>
  );
}

ViewsCount.propTypes = {
  count: PropTypes.string.isRequired
};

export default ViewsCount;
