// react libraries
import * as React from "react";

import { Route, Switch } from "react-router-dom";
import Login from '../Component/Login';
import Home from '../Component/Home';

const Routes = () => (
  <Switch>
    {/* <Route exact path="/contact" component={Nav} /> */}
    <Route exact path="/Login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route path="*" component={() => <div>Not found</div>} />
  </Switch>
);

export default Routes;
