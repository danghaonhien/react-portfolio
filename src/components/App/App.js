import React, { Fragment } from "react";
import Navbar from "./../Navbar/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Architecture from "./../../containers/Architecture/index";
import Code from "./../../containers/Code/index";
import Landing from "./../../containers/Landing/index";
import Footer from "./../Footer/index";

import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";

const App = (props) => (
  <React.Fragment>
    <CssBaseline />
    <Container fixed>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/architecture' component={Architecture} />
            <Route exact path='/code' component={Code} />
          </Switch>

          <Footer />
        </Fragment>
      </Router>
    </Container>
  </React.Fragment>
);

export default App;
