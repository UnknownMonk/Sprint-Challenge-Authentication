import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: 'leeRoy',
    password: 'brown'
  };
  render() {
    return (
      <>
        <h1>Login</h1>
        {this.props.loginMessage && <h2>{this.props.loginMessage}</h2>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">
              <input
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                type="text"
              />
            </label>
            <label htmlFor="password">
              <input
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
              />
            </label>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data.token);

        this.props.history.push('/users');
      })
      .catch(error => {
        console.error('LOGIN ERROR', error);
      });
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
}

export default Login;
