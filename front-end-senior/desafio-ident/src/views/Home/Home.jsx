import React, { useState } from "react";
import { CarouselLancamentos, Implantodontia, Periodontia } from "layouts";
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

function Home(props) {
  const [lancamentos, setLancamentos] = useState({
    loading: false,
    cursos: 0,
    items: [1,2,3,4,5,6,7,8]
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
          items={lancamentos.items}
          isLoading={lancamentos.loading}
          cursos={lancamentos.cursos}
        />
        <Implantodontia
          items={implantodontia.items}
          isLoading={implantodontia.loading}
          cursos={implantodontia.cursos}
        />
        <Periodontia
          items={periodontia.items}
          isLoading={periodontia.loading}
          cursos={periodontia.cursos}
        />
      </React.Fragment>
    );
}

export default withStyles(styles)(Home);