import React from "react";
import { Route, Switch } from "react-router-dom";

import Auth from "containers/Auth/Auth";


const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
