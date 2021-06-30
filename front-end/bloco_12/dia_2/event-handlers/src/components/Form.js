import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      estadoFavorito: '',
      frameworkPreferido: '',
      gostaProg: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className='form'>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <textarea
              name='estadoFavorito'
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Qual seu Framework Favorito?
            <select
              name='frameworkPreferido'
              value={this.state.frameworkPreferido}
              onChange={this.handleChange}
            >
              <option value='Angular'>Angular</option>
              <option value='React'>React</option>
              <option value='Jest'>Jest</option>
              <option value='Bootstrap'>Bootstrap</option>
            </select>
          </label>
          <label>
            Gosta de programar?
            <input
              type='checkbox'
              name='gostaProg'
              id='gostaProg'
              value={this.state.gostaProg}
              onClick={this.handleChange}
            /><br />
            <label for='sim'>Sim</label>
          </label>
          <label>
            Seu arquivo aqui:
          <input type="file" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
