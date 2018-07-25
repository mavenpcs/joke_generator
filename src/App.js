import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.fetchJoke = this.fetchJoke.bind(this);
    this.state = {
      joke: []
    }
  }

  componentDidMount = () => {
    this.fetchJoke();
  }

  fetchJoke = () => {
    fetch('https://api.icndb.com/jokes/random')
    .then(result => {
      return result.json();
    })
    .then(data => {
      this.setState({joke: data.value.joke});
    })
  }

  render() {
    return (
      <div className='container center-screen'>
        <h1 className='padded-multi-line'>Chuck Norris Joke of the Day</h1>
        <p className='padded-multi-line'>{this.state.joke}</p>
        <Button onClick={this.fetchJoke} color='danger'>Generate</Button>
      </div>
    );
  }
}

export default App;
