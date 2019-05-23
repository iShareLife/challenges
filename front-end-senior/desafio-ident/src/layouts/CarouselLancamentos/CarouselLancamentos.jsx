import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Panel, CarouselCard, ContentLoading } from "components";
import PropTypes from "prop-types";
import NotFoundImage from "../../assets/img1.png";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css"
import Typography from '@material-ui/core/Typography';

 const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  panel: {
    marginBottom: 10
  }
});

const Loading = () => {
  return Array(4)
    .fill(4)
    .map((e, i) => (
      <Grid key={i} item xs={12} md={6} lg={3}>
        <ContentLoading />
      </Grid>
    ));
};

const GridLayout = props => {
  const { classes, isLoading, title, children, subtitle, showLogo, items } = props;
  const xl = useMediaQuery("(max-width:1600px)");

  return (
    <div className={classes.panel}>
      <Panel title={title} subtitle={subtitle} showLogo={showLogo}>
        {items.length > 0?<Grid container className={classes.root} spacing={xl ? 16 : 24}>
          {isLoading ? (
            <Loading />
          ) : (
          <Carousel
            arrows
            autoPlaySpeed={3000}
            containerClass="container"
            showDots
            infinite={true}
            style={{height: 380}}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 4,
                paritialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                paritialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                paritialVisibilityGutter: 30
              }
            }}
          >
            {items.map(e => ( <div>{children}</div>))}
          </Carousel>)}
        </Grid>:<Typography>Sem resultados</Typography>}
      </Panel>
    </div>
  );
};

const Lancamentos = props => {
  const { classes, items, isLoading, cursos, imageFile } = props;
  return (
      <GridLayout
        title="Lançamentos"
        subtitle={`${cursos} cursos`}
        classes={classes}
        isLoading={isLoading}
        showLogo={true}
        items={items}
      >
        <CarouselCard img={imageFile} />
      </GridLayout>
  );
};

Lancamentos.propTypes = {
  classes: PropTypes.object.isRequired
};

Lancamentos.defaultProps = {
  imageFile: NotFoundImage,
  items: []
};

export default withStyles(styles)(Lancamentos);