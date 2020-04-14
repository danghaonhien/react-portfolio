import React from "react";
import { Link } from "react-router-dom";
import LandingGrid from "./LandingGrid";
import Bio from "./Bio";
import Box from "@material-ui/core/Box";
import ScheduleIcons from "../../components/Icons/ScheduleIcons";
const Landing = () => {
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
      <ScheduleIcons />
      <Box
        alignItems='center'
        alignContent='center'
        justifyContent='center'
        display='block'
      >
        <Bio />
      </Box>
      <div className='landing-projects'>
        <LandingGrid />
      </div>
    </section>
  );
};

export default Landing;
