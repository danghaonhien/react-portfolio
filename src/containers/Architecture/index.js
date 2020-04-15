import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import projects from "./../Portfolio/projects";
import StyledCard from "./../Landing/StyledCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Architecture = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <StyledCard
              title={projects[0].title}
              img={projects[0].imgURL}
              content={projects[0].content}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Architecture;
