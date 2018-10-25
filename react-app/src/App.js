import React, { Component } from 'react';
import Home from './pages/Home';
import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error";


class App extends Component {
  render() {
    return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Error} />
    </Switch>
    );
  }
}

export default App;
