import React from "react";
// import "../assets/stylesheets/style.scss";
import Home from "./home/Home";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
        {/* <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginUser} />
          </Switch>
        </Router> */}
      </>
    );
  }
}

export default App;
