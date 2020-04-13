import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Architecture from "./../../containers/Architecture/index";
import Code from "./../../containers/Code/index";
import Landing from "./../../containers/Landing/index";
import Footer from "./../Footer/index";
const App = (props) => (
  <Router>
    <Fragment>
      <div className='body'>
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/architecture' component={Architecture} />
          <Route exact path='/code' component={Code} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
