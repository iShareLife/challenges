import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Panel, PageCard, ContentLoading } from "components";
import PropTypes from "prop-types";
import NotFoundImage from "../../assets/img1.png";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

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
  const xl = useMediaQuery("(max-width:1000px)");

  return (
    <div className={classes.panel}>
      <Panel title={title} subtitle={subtitle} showLogo={showLogo}>
        <Grid container className={classes.root} spacing={xl ? 16 : 24}>
          {isLoading ? (
            <Loading />
          ) : (
              <>
                {items.map(e => (
                  <Grid key={e} item xs={12} md={6} lg={3}>
                    {children}
                  </Grid>
                ))}
              </>
            )}
        </Grid>
      </Panel>
    </div>
  );
};

const Implantodontia = props => {
  const { classes, items, isLoading, cursos, imageFile } = props;
  return (
    <GridLayout
      title="Lançamentos"
      subtitle={`${cursos} cursos`}
      classes={classes}
      isLoading={isLoading}
      showLogo={false}
      items={items}
    >
      <PageCard img={imageFile} />
    </GridLayout>
  );
};

Implantodontia.propTypes = {
  classes: PropTypes.object.isRequired
};

Implantodontia.defaultProps = {
  imageFile: NotFoundImage,
  items: []
};

export default withStyles(styles)(Implantodontia);