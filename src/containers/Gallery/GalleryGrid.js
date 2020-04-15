import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid";
import images from "./../Portfolio/images";
import GalleryCard from "./GalleryCard";
// import Swiper from "react-id-swiper"
import "swiper/css/swiper.css";
import Zoom from "@material-ui/core/Zoom";

// import ScheduleIcons from "../../components/Icons/ScheduleIcons"
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: { margin: "auto", borderRadius: 0, position: "relative" },

  header: {
    margin: 15,
    textAlign: "center",
  },
}));
const GalleryGrid = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h5' component='h5' className={classes.header}>
        Gallery
      </Typography>
      <Zoom in={true}>
        <div className={classes.root}>
          <Grid container spacing={2} alignItems='center' alignContent='center'>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard img={images[0].imgURL} />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard img={images[1].imgURL} />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard img={images[2].imgURL} />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard img={images[3].imgURL} />
            </Grid>
          </Grid>

          <div>
            <Grid
              container
              spacing={2}
              alignItems='center'
              alignContent='center'
            >
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <GalleryCard img={images[0].imgURL} />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={4}>
                <GalleryCard img={images[1].imgURL} />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={4}>
                <GalleryCard img={images[1].imgURL} />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              spacing={2}
              alignItems='center'
              alignContent='center'
            >
              <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                <GalleryCard img={images[0].imgURL} />
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                <GalleryCard img={images[1].imgURL} />
              </Grid>
            </Grid>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default GalleryGrid;
