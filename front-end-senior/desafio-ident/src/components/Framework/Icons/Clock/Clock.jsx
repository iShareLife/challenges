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
    fontSize: 14
  },
  count: {
    fontSize: 12,
    fontFamily: "'Open Sans', sans-serif",
    marginLeft: 5,
    display: 'inline-block'
  }
};

function Clock(props) {
  return (
    <div style={styles.container}>
      <WatchLater style={{ ...styles.base, ...styles.icon }} />
      <div style={{ ...styles.base, ...styles.count }}>{props.time}</div>
    </div>
  );
}

Clock.propTypes = {
  time: PropTypes.string.isRequired
};

export default Clock;
