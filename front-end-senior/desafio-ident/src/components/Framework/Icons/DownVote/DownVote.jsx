import React from "react";
import ThumbDown from "@material-ui/icons/ThumbDown";
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
    top: 2,
    position: 'relative'
  },
  count: {
    fontSize: 12,
    fontFamily: "'Open Sans', sans-serif",
    display: 'inline-block',
    marginLeft: 3
  }
};

function DownVote(props) {
  return (
    <div style={{...styles.container, ...props.styleProps}}>
      <ThumbDown style={{ ...styles.base, ...styles.icon }} />
      <div style={{ ...styles.base, ...styles.count }}>{props.count}</div>
    </div>
  );
}

DownVote.propTypes = {
  count: PropTypes.string.isRequired
};

export default DownVote;
