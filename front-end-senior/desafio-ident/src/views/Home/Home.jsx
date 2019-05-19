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
  return Array(4).fill(4).map((e,i) => (
    <Grid key={i} item xs={12} md={6} lg={3}>
      <ContentLoading />
    </Grid>
  ));
};

const Lancamentos = props => {
  const { classes, items, isLoading, cursos} = props;
  return (
    <GridLayout
      title="Lançamentos"
      subtitle={`${cursos} cursos`}
      classes={classes}
      isLoading={isLoading}
      showLogo={true}
    >
      {items.map(e => (
        <Grid key={e} item xs={12} md={6} lg={3}>
          <CarouselCard img={imageFile} />
        </Grid>
      ))}
    </GridLayout>
  );
};

const Implantodontia = props => {
  const { classes, items, isLoading, cursos } = props;
  return (
    <GridLayout
      title="Implantodontia"
      subtitle={`${cursos} cursos`}
      classes={classes}
      isLoading={isLoading}
      showLogo={false}
    >
      {items.map(e => (
        <Grid key={e} item xs={12} md={6} lg={3}>
          <CarouselCard img={imageFile} />
        </Grid>
      ))}
    </GridLayout>
  );
};

const Periodontia = props => {
  const { classes, items, isLoading, cursos } = props;
  return (
    <GridLayout
      title="Periodontia"
      subtitle={`${cursos} cursos`}
      classes={classes}
      isLoading={isLoading}
      showLogo={false}
    >
      {items.map(e => (
        <Grid key={e} item xs={12} md={6} lg={3}>
          <CarouselCard img={imageFile} />
        </Grid>
      ))}
    </GridLayout>
  );
};

const GridLayout = props => {
  const { classes, isLoading, title, subtitle, children, showLogo } = props;
  return (
    <div className={classes.panel}>
      <Panel title={title} subtitle={subtitle} showLogo={showLogo}>
        <Grid container className={classes.root} spacing={16}>
          {isLoading ? <Loading /> : <>{children}</>}
        </Grid>
      </Panel>
    </div>
  );
};

class Home extends Component {
  state = {
    lancamentos: {
      loading: false,
      cursos: 0,
      items: [1, 2, 3, 4]
    },
    periodontia: {
      loading: false,
      items: [1, 2, 3, 4, 5, 6, 7],
      cursos: 29
    },
    implantodontia: {
      loading: true,
      items: [],
      cursos: 999
    }
  };

  render() {
    const { lancamentos, periodontia, implantodontia } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Lancamentos
          classes={classes}
          items={lancamentos.items}
          isLoading={lancamentos.loading}
          cursos={lancamentos.cursos}
        />
        <Implantodontia
          classes={classes}
          items={implantodontia.items}
          isLoading={implantodontia.loading}
          cursos={implantodontia.cursos}
        />
        <Periodontia
          classes={classes}
          items={periodontia.items}
          isLoading={periodontia.loading}
          cursos={periodontia.cursos}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);