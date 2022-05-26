import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

    this.state = {
      locations: [],
    };
    console.log('constructor');
}

componentDidMount() {
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(() => {
          return {locations: users}
        },
        () => {
          console.log(this.state);
        }
      )
    );
}

  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.locations.map((location) => {
            return (
              <div key={location.id}>
                <h1>{location.name}</h1>
              </div>
            );
          })}
      </div>
    );
  }
  
}

export default App;
