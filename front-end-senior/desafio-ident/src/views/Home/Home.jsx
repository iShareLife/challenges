import React, { Component } from "react";
import { Panel, CarouselCard, ContentLoading } from "components";
import imageFile from "../../assets/img1.png";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  panel: {
    marginBottom: 40
  }
});

const Loading = () => {
  return [1, 2, 3, 4].map(e => (
    <Grid key={e} item xs={12} md={6} lg={3}>
      <ContentLoading />
    </Grid>
  ));
};

const Lançamentos = props => {
  const { classes, items, isLoading } = props;
  return (
    <div className={classes.panel}>
      <Panel title="Lançamentos" showLogo={true}>
        <Grid container className={classes.root} spacing={16}>
          {isLoading ? (
            <Loading />
          ) : (
            items.map(e => (
              <Grid key={e} item xs={12} md={6} lg={3}>
                <CarouselCard img={imageFile} />
              </Grid>
            ))
          )}
        </Grid>
      </Panel>
    </div>
  );
};

const Implantodontia = props => {
  const { classes, items, isLoading } = props;
  return (
    <div className={classes.panel}>
      <Panel title="Implantodontia" subtitle="6 cursos">
        <Grid container className={classes.root} spacing={16}>
          {isLoading ? (
            <Loading />
          ) : (
            items.map(e => (
              <Grid key={e} item xs={12} md={6} lg={3}>
                <CarouselCard img={imageFile} />
              </Grid>
            ))
          )}
        </Grid>
      </Panel>
    </div>
  );
};

const Periodontia = props => {
  const { classes, items, isLoading } = props;
  return (
    <div className={classes.panel}>
      <Panel title="Periodontia" subtitle="3 cursos">
        <Grid container className={classes.root} spacing={16}>
          {isLoading ? (
            <Loading />
          ) : (
            items.map(e => (
              <Grid key={e} item xs={12} md={6} lg={3}>
                <CarouselCard img={imageFile} />
              </Grid>
            ))
          )}
        </Grid>
      </Panel>
    </div>
  );
};

class Home extends Component {
  state = {
    lancamentos: {
      loading: false,
      items: []
    },
    periodontia: {
      loading: false,
      items: []
    },
    implantodontia: {
      loading: false,
      items: []
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Lançamentos classes={classes} items={[1, 2, 3, 4]} is-loading={false}/>
        <Implantodontia classes={classes} items={[1, 2, 3, 4, 5, 6, 7, 8]} is-loading={true}/>
        <Periodontia classes={classes} items={[]} is-loading={false}/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
