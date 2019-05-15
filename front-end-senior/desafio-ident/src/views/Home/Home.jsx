import React, { Component } from 'react'
import {Panel, CarouselCard} from "components"
import imageFile from '../../assets/img1.png';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  panel: {
    marginBottom: 40
  }
});
 class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.panel}>
          <Panel title="Lançamentos" showLogo={true} >
            <Grid container className={classes.root} spacing={16}>
              {[1,2,3,4].map((e) =>
                <Grid key={e} item xs={12} md={6} lg={3}>
                  <CarouselCard img={imageFile}/>
                </Grid>
              )
              }
            </Grid>
          </Panel>
        </div>
        <div className={classes.panel}>
          <Panel title="Implantodontia">
            <Grid container  className={classes.root} spacing={16}>
              {[1,2,3,4,5,6,7,8].map((e) =>
                <Grid key={e} item xs={12} md={6} lg={3}>
                  <CarouselCard img={imageFile}/>
                </Grid>
              )
              }
            </Grid>
          </Panel>
        </div>
         <div className={classes.panel}>
          <Panel title="Periodontia">
            <Grid container  className={classes.root} spacing={16}>
              {[1,2,3].map((e) =>
                <Grid key={e} item xs={12} md={6} lg={3}>
                  <CarouselCard img={imageFile}/>
                </Grid>
              )
              }
            </Grid>
          </Panel>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Home)