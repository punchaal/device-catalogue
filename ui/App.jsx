import React from "react";
import { Switch, Route } from "react-router-dom";
import WatchesPage from "./pages/WatchesPage.jsx";
import PhonesPage from "./pages/PhonesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CSSReset from '@tds/core-css-reset';

const App = () => {
  return (
      <div>
       <CSSReset/>
        <Switch>
        <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/watches"} component={WatchesPage} />
      <Route exact path={"/phones"} component={PhonesPage} />
    </Switch>
      </div>
    
  );
};

export default App;
