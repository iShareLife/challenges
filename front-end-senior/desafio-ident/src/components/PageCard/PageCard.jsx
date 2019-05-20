import React from "react";
import PropTypes from "prop-types";
import { ViewsCount, Clock, Card, UpVote, DownVote } from "components";
import { withStyles } from "@material-ui/core/styles";
import ButtonBasic from "../Framework/ButtonBasic";

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

function PageCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card title="Nanotecnologia Aplicada a Implantodontia" img={props.img} styleProps={{ maxWidth: 320, margin: "0 auto" }}>
        <div className={classes.iconsContainer}>
          <ViewsCount styleProps={{ margin: '0 5px' }} count="1.280" />
          <Clock styleProps={{ margin: '0 5px' }} time="1h 19min" />
          <UpVote styleProps={{ margin: '0 5px' }} count="225" />
          <DownVote styleProps={{ margin: '0 5px' }} count="12" />
        </div>
        <ButtonBasic>Assista agora</ButtonBasic>
      </Card>
    </div>
  );
}

PageCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageCard);
