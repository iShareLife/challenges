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
    fontSize: 14,
    top: 1,
    position: 'relative'
  },
  count: {
    fontSize: 12,
    fontFamily: "'Open Sans', sans-serif",
    display: 'inline-block',
    marginLeft: 3
  }
};

function UpVote(props) {
  return (
    <div style={{...styles.container, ...props.styleProps}}>
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
