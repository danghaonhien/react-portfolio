import React from "react";
import StyledCard from "./StyledCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
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
        <div className='landing-projects'>
          <div className={classes.root}>
            <Grid
              container
              spacing={4}
              direction='row'
              alignItems='center'
              justify='center'
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard>Card 1</StyledCard>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard>Card 1</StyledCard>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard>Card 1</StyledCard>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper className={classes.paper} elevation={1}>
                  <StyledCard>Card 1</StyledCard>
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
