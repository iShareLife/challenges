import React, { useState } from "react";
import { Panel, CarouselCard, ContentLoading } from "components";
import { CarouselLancamentos, Implantodontia } from "layouts";
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

/*const Implantodontia = props => {
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
};*/

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

function Home(props) {
  const [lancamentos, setLancamentos] = useState({
    loading: false,
    cursos: 0,
    items: [1,2,3,4]
  });
  const [periodontia, setPeriodontia] = useState({
    loading: true,
    cursos: 0,
    items: []
  });
  const [implantodontia, setImplantodontia] = useState({
    loading: false,
    cursos: 0,
    items: [1,2,3,4]
  });

  const { classes } = props;
    return (
      <React.Fragment>
        <CarouselLancamentos
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

export default withStyles(styles)(Home);