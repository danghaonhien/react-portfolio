import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(20),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <section>
      <div className='container'>
        <Link className='App-arch' to='/Architecture'>
          <h1> Archi</h1>
        </Link>
        <Link className='App-code' to='/Code'>
          <h1>Tech</h1>
        </Link>
      </div>
      <div className='bio'>
        <img src='' alt='' />
        <h1>Nhien Dang</h1>
        <h3>Architect can Code</h3>
      </div>
      <div className='landing-projects'>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xl={3}>
              <Paper className={classes.paper}>xl=3</Paper>
            </Grid>
            <Grid item xl={3}>
              <Paper className={classes.paper}>xl=3</Paper>
            </Grid>
            <Grid item xl={3}>
              <Paper className={classes.paper}>xl=3</Paper>
            </Grid>
            <Grid item xl={3}>
              <Paper className={classes.paper}>xl=3</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Landing;
