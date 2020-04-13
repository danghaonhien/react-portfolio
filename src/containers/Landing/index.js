import React from "react";
import { Link } from "react-router-dom";
import LandingGrid from "./LandingGrid";
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
      <div className='bio'>
        <img src='' alt='' />
        <h1>Nhien Dang</h1>
        <h3>Architect can Code</h3>
      </div>
      <div className='landing-projects'>
        <LandingGrid />
      </div>
    </section>
  );
};

export default Landing;
