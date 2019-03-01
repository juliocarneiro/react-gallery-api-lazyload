import React from "react";
import { Switch, Route } from "react-router-dom";
import Albums from "./components/Albums.js";
import Photos from "./components/Photos.js";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Albums} />
      <Route path="/:id" component={Photos} />
    </Switch>
  );
};

export default App;
