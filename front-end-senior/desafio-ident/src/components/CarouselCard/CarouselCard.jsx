import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { FabPlay, ViewsCount, UpVote, DownVote, Clock } from "components";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  title: {
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "'Open Sans', sans-serif"
  },
  card: {
    height: "100%",
    display: "flex",
    width: 320,
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1,
    position: "relative",
    padding: "10px 15px",
    top: -25
  },
  iconsContainer: {
    display: "flex",
    margin: "20px auto 0px auto"
  }
});

function DCard(props){
    const { classes } = props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={props.img}
            title="Image title"
          />
          <FabPlay />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} align="center">
              {props.title}
            </Typography>
            <div className={classes.iconsContainer}>
              <ViewsCount count="2" />
              <Clock time="5" />
              <UpVote count="3" />
              <DownVote count="1" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

DCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(DCard);
