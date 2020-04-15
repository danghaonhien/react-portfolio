import React from "react";
import StyledCard from "./StyledCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import projects from "./../Portfolio/projects";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(15),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const LandingGrid = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Zoom in={true}>
        <div>
          <div className={classes.root}>
            <Grid
              container
              spacing={5}
              alignItems='center'
              alignContent='center'
            >
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard
                    title={projects[0].title}
                    img={projects[0].imgURL}
                    content={projects[0].content}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard
                    title={projects[1].title}
                    img={projects[1].imgURL}
                    content={projects[1].content}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard
                    title={projects[2].title}
                    img={projects[2].imgURL}
                    content={projects[2].content}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard
                    title={projects[3].title}
                    img={projects[3].imgURL}
                    content={projects[3].content}
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Zoom>
      ;
    </div>
  );
};

export default LandingGrid;
