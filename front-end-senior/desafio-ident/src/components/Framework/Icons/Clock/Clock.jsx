import React from "react";
import WatchLater from "@material-ui/icons/WatchLater";
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
    marginLeft: 2
  }
};

function Clock(props) {
  return (
    <div style={{...styles.container, ...props.styleProps}}>
      <WatchLater style={{ ...styles.base, ...styles.icon }} />
      <div style={{ ...styles.base, ...styles.count }}>{props.time}</div>
    </div>
  );
}

Clock.propTypes = {
  time: PropTypes.string.isRequired
};

export default Clock;
