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

    if(this.state.numeroDeCliques % 2) {
      document.querySelector('#bOriginal').style.backgroundColor = 'green';
    } else {
      document.querySelector('#bOriginal').style.backgroundColor = 'white';
    }

    console.log(document.querySelector('#bOriginal').style.backgroundColor);
  }

  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))

    if(this.state.numeroDeCliques1 % 2) {
      document.querySelector('#b1').style.backgroundColor = 'green';
    } else {
      document.querySelector('#b1').style.backgroundColor = 'white';
    }

    console.log(document.querySelector('#b1').style.backgroundColor);
  }

  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))

    if(this.state.numeroDeCliques2 % 2) {
      document.querySelector('#b2').style.backgroundColor = 'green';
    } else {
      document.querySelector('#b2').style.backgroundColor = 'white';
    }

    console.log(document.querySelector('#b2').style.backgroundColor);
  }

  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))

    if(this.state.numeroDeCliques3 % 2) {
      document.querySelector('#b3').style.backgroundColor = 'green';
    } else {
      document.querySelector('#b3').style.backgroundColor = 'white';
    }

    console.log(document.querySelector('#b3').style.backgroundColor);
  }

  render() {
    return (
      <div>
        <button className="Butoes" id="bOriginal" onClick={this.handleClick}>Meu botão: {this.state.numeroDeCliques}</button>

        <div>
          <button className="Butoes" id="b1" onClick={this.handleClick1}>Meu botão: {this.state.numeroDeCliques1}</button>
          <button className="Butoes" id="b2" onClick={this.handleClick2}>Meu botão: {this.state.numeroDeCliques2}</button>
          <button className="Butoes" id="b3" onClick={this.handleClick3}>Meu botão: {this.state.numeroDeCliques3}</button>
        </div>
      </div>
    );
  }
}

export default App;
