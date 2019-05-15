import React from "react";
import PropTypes from "prop-types";
import { ViewsCount, Clock, Card, UpVote, DownVote } from "components";
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
    margin: "20px 5px 0px 5px",
    justifyContent: "center"
  }
});

function CarouselCard(props){
    const { classes } = props;
    return (
      <div>
        <Card title="Nanotecnologia Aplicada a Implantodontia" img={props.img}>
            <div className={classes.iconsContainer}>
              <ViewsCount styleProps={{margin: '0 5px'}}  count="1.280" />
              <Clock styleProps={{margin: '0 5px'}} time="1h 19min" />
              <UpVote styleProps={{margin: '0 5px'}}  count="225" />
              <DownVote styleProps={{margin: '0 5px'}}  count="12" />
            </div>
        </Card>
      </div>
    );
}

CarouselCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CarouselCard);
