import { Fragment } from "react";
import { Route, Switch } from "wouter";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Fragment>
            <Switch>
                <Route
                    path="/"
                    component={Home}
                />
                <Route
                    path="/home"
                    component={Home}
                />
                <Route
                    path="/shop"
                    component={Shop}
                />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    );
}

export default App;
