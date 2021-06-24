import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor() {
  //   super()
  //   // A função abaixo vincula "manualmente" o `this` à nossa função
  //   this.handleClick = this.handleClick.bind(this)
  // }

  render() {
    const handleClick = ()  => {
      console.log(this)
      console.log('Clicou!')
    };

    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;
