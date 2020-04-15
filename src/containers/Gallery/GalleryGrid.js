import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid";
import projects from "./../Portfolio/projects";
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
  //   const params = {
  //     effect: "coverflow",
  //     grabCursor: true,
  //     centeredSlides: true,
  //     slidesPerView: "auto",

  //     coverflowEffect: {
  //       rotate: 50,
  //       stretch: 0,
  //       depth: 150,
  //       modifier: 1,
  //       slideShadows: true,
  //     },
  //     pagination: {
  //       el: ".swiper-pagination.customized-swiper-pagination",
  //       type: "bullets",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next.customized-swiper-button-next",
  //       prevEl: ".swiper-button-prev.customized-swiper-button-prev",
  //     },

  //     spaceBetween: 30,
  //   }
  return (
    <div className={classes.root}>
      <Typography variant='h5' component='h5' className={classes.header}>
        Gallery
      </Typography>
      <Zoom in={true}>
        <div className={classes.root}>
          <Grid container spacing={2} alignItems='center' alignContent='center'>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard
                title={projects[0].title}
                img={projects[0].imgURL}
                content={projects[0].content}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard
                title={projects[1].title}
                img={projects[1].imgURL}
                content={projects[1].content}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard
                title={projects[2].title}
                img={projects[2].imgURL}
                content={projects[2].content}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <GalleryCard
                title={projects[3].title}
                img={projects[3].imgURL}
                content={projects[3].content}
              />
            </Grid>
          </Grid>
        </div>
      </Zoom>
    </div>
  );
};

export default GalleryGrid;
