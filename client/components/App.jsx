import React from "react";
// import "../assets/stylesheets/style.scss";
import Home from "./home/Home";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AllUsers from "./AllUsers";
import LoginForm from "./LoginForm";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello Thunk</h1>
        <Router>
          <Switch>
            <Route exact path="/create" component={LoginForm} />
            <Route path="/all" component={AllUsers} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
