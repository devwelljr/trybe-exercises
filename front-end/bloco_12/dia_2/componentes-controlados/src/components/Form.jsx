import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      estadoFavorito: '',
      frameworkFavorito: '',
      gostaProg: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.frameChange = this.frameChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  frameChange(event) {
    this.setState({
      frameworkFavorito: event.target.value,
    })
  }

  progChange(event) {
    this.setState({
      gostaProg: event.target.value,
    })
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
            <select name="frameworkPreferido" value={this.state.frameworkFavorito} onChange={this.frameChange}>
              <option value="Angular">Angular</option>
              <option value="React">React</option>
              <option value="Jest">Jest</option>
              <option value="Bootstrap">Bootstrap</option>
            </select>
          </label>
          <label>
            Gosta de programar?
            <input type="checkbox" name="sim" id="sim" value="sim" onClick={this.progChange}/>
            <label for="sim">Sim</label>
            <input type="checkbox" name="não" id="não" value="não" onClick={this.progChange}/>
            <label for="não">Não</label>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
