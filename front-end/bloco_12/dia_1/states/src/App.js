import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }

  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }

  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão: {this.state.numeroDeCliques}</button>

        <div>
          <button onClick={this.handleClick1}>Meu botão: {this.state.numeroDeCliques1}</button>
          <button onClick={this.handleClick2}>Meu botão: {this.state.numeroDeCliques2}</button>
          <button onClick={this.handleClick3}>Meu botão: {this.state.numeroDeCliques3}</button>
        </div>
      </div>
    );
  }
}

export default App;
