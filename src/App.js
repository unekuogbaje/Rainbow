import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';


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
      <div className="App bg-gradient-to-l from-pink-600 to-yellow-600 ">
      <div className='app-title font-bold text-8xl text-[#83022d] p-2 ml-96 italic '>
      <h1>Rainbow Robots</h1>
      </div>
          <SearchBox 
            className='batches-search-box'
            onChangeHandler={onSearchChange} placeholder='Search your robot' 
          />
          <CardList batches={filteredbatches} />
      </div> 
    );
  } 
}

export default App;
