import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <>
        <h1>Jokes</h1>
        <ul>
          {this.state.jokes.map(joke => (
            <div key={joke.id}>
              <li>
                <strong>Dad Joke: </strong>
                {joke.joke}
              </li>

              <p />
            </div>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = `http://localhost:3300/api/jokes`;
    axios
      .get(endpoint)
      .then(res => {
        console.log(this.setState({ jokes: res.data }));
      })
      .catch(error => {
        console.error('USERS ERROR', error);
      });
  }
}

export default Users;
