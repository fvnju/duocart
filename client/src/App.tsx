import { Fragment } from "react";
import { Route, Switch } from "wouter";

import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
