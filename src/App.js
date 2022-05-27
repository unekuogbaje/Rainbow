import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

    this.state = {
      batches: [],
      searchField: ''
    };
    console.log('constructor');
}

componentDidMount() {
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(() => {
          return {batches: users}
        },
        () => {
          console.log(this.state);
        }
      )
    );
}


onSearchChange = (event) => { 
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return { searchField };
  });
};

  render() {
    console.log('render');

    const { batches, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredbatches = batches.filter((batch) => {
      return batch.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <input 
        className='search-box'
        type='search'
        placeholder='search batches'
        onChange={onSearchChange}
      />
        {filteredbatches.map((batch) => {
            return (
              <div key={batch.id}>
                <h1>{batch.name}</h1>
              </div>
            );
          })}
      </div>
    );
  } 
}

export default App;
