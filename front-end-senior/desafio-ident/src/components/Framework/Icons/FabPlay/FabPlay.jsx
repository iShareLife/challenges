import React from "react";
import Fab from "@material-ui/core/Fab";
import PlayArrowRounded from "@material-ui/icons/PlayArrowRounded";

const styles = {
    icon: {
        fontSize: 37,
        color: "#943E95"
    },
    fab: {
        top: -29,
        margin: "0 auto",
        border: "3px solid #EAEBED",
        backgroundColor: "#ffffff"
    }
} 

function FabPlay() {
  return (
    <Fab style={styles.fab}>
      <PlayArrowRounded style={styles.icon} />
    </Fab>
  );
}

export default FabPlay;
