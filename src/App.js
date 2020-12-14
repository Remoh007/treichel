import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Overview from "./views/Overview";
import ModernDesign from "./views/ModernDesign";
import OriginalDesign from "./views/OriginalDesign";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/v1/" component={ModernDesign} />
        <Route path="/v2/" component={OriginalDesign} />
      </Switch>
    </HashRouter>
  );
};

export default App;
