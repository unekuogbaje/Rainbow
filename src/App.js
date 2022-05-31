import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
constructor() {
  super();

    this.state = {
      batches: [],
      searchField: '',
    };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
      this.setState(() => {
          return { batches: users };
        })
    );
}


onSearchChange = (event) => { 
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return { searchField };
  });
};

  render() {
    // console.log('render from AppJs');
    const { batches, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredbatches = batches.filter((batch) => {
      return batch.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
          <SearchBox 
            className='search-box'
            onChangeHandler={onSearchChange} placeholder='search batches' 
          />
          <CardList batches={filteredbatches} />
      </div> 
    );
  } 
}

export default App;
