import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    counter: 0
  }

  increment = () => {
    let { counter } = this.state;
    counter += 1;
    this.setState({
      counter
    });
  }

  render() {
    let { counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to bilal</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Counter:{counter}</p>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default App;
