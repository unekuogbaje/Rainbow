import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

    this.state = {
      locations: [
        {
          name: 'Pretoria'
        },
        {
          name: 'Ibadan'
        },
        {
          name: 'Monrovia'
        },
        {
          name: 'Accra'
        },
      ],
    };
}

  render() {
    return (
      <div className="App">
        {
          this.state.locations.map((location) => {
            return <h1>{location.name}</h1>;
          })
        }
      </div>
    );
  }
  
}

export default App;
