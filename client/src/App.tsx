import { Fragment } from "react";
import {
  Route as WouterRoute,
  Switch,
  RouteProps,
  DefaultParams,
  PathPattern,
} from "wouter";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const urlPaths = ["home", "shop"] as const; // update this array to add more url paths

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/shop" component={Shop} />
        <WouterRoute component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export type urlPathType = (typeof urlPaths)[number] | "";

function withBasePath(route: `/${urlPathType}` = "/") {
  const base_url = import.meta.env.BASE_URL;
  return `${base_url.slice(0, base_url.length)}${route}`;
}

function Route<
  T extends DefaultParams | undefined = undefined,
  RoutePath extends PathPattern = PathPattern
>({
  path,
  component,
  ...props
}: Omit<
  RouteProps<T, RoutePath>,
  keyof {
    path: `/${urlPathType}`;
  }
> & {
  path: `/${urlPathType}`;
}) {
  return (
    <WouterRoute
      path={withBasePath(path) as RoutePath}
      component={component}
      {...props}
    />
  );
}

export default App;
