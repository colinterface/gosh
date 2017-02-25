import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      inputValue: '',
    };
  }

  addItem = () => {
    this.setState({
      items: this.state.items.concat(this.state.inputValue),
      inputValue: '',
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.items.map((item, index) => {
            return (
              <div key={index}>{`item ${index}: ${item}`}</div>
            );
          })
        }
        <input
          type={'text'}
          value={this.state.inputValue}
          onChange={(event) => {
            this.setState({ inputValue: event.target.value });
          }}
        />
        <button
          onClick={this.addItem}
        >
          {'add item'}
        </button>
      </div>
    );
  }
}

export default App;
