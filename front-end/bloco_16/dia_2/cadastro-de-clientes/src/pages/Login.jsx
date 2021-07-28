import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/index';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    }
  }

  render() {
    const { email, senha } = this.state;
    return (
      <form>
        <fieldset>
          <input
          type='text'
          name='email'
          value={ email }
          placeholder='Seu email:'
          onChange={ event => this.setState({ email: event.target.value }) }
          />
          <input
          type='password'
          name='senha'
          value={ senha }
          placeholder='Sua senha:'
          onChange={ event => this.setState({ senha: event.target.value }) }
          />
          <Link
          to='/clients'
          onClick={ () => this.props.login({ email, senha }) }
          >
            Enviar
          </Link>
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: event => dispatch(login(event)),
});

export default connect(null, mapDispatchToProps)(Login);
