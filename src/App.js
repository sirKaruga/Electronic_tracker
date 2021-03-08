import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./screens/home";
import Register from "./screens/register";
import Confirm from "./screens/confirm";
import About from "./screens/about";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}
