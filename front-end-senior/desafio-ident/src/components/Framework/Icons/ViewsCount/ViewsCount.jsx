import React from "react";
import VisibilitySharp from "@material-ui/icons/VisibilitySharp";
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
    marginl: '0 5px',
    display: 'inline-block',
    marginLeft: 2
  }
};

function ViewsCount(props) {
  return (
    <div style={{...styles.container, ...props.styleProps}}>
      <VisibilitySharp
        style={{ ...styles.base, ...styles.icon }}
      />
      <div style={{ ...styles.base, ...styles.count }}>{props.count}</div>
    </div>
  );
}

ViewsCount.propTypes = {
  count: PropTypes.string.isRequired
};

export default ViewsCount;
