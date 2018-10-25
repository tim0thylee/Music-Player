import React, { Component } from 'react';
import Container from "../components/Container/Container";
import '../App.css';
import '../reset.css';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Container />
        <div className="triangle-background">
        </div>
      </div>
    );
  }
}

export default Home
