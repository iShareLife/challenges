import React from "react";
import ThumbUp from "@material-ui/icons/ThumbUp";
import PropTypes from "prop-types";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between"
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

function UpVote(props) {
  return (
    <div style={styles.container}>
      <ThumbUp
        style={{ ...styles.base, ...styles.icon }}
      />
      <div style={{ ...styles.base, ...styles.count }}>{props.count}</div>
    </div>
  );
}

UpVote.propTypes = {
  count: PropTypes.string.isRequired
};

export default UpVote;
