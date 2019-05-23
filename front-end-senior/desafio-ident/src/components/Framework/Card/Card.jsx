import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import  FabPlay from "../Icons/FabPlay";
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
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1,
    position: "relative",
    padding: "10px 15px",
    top: -25,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  iconsContainer: {
    display: "flex",
    margin: "20px 5px 0px 5px",
    justifyContent: "space-between"
  }
});

function DCard(props){
    const { classes, children, styleProps } = props;
    return (
      <div>
        <Card className={classes.card} style={styleProps}>
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
              {children}
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
