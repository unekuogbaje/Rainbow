import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();


    this.state = {
      name: {firstLine: 'Schedule', secondLine: 'batches'},
      company: 'Crowdyvest',
    };
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Payout {this.state.name.firstLine} {this.state.name.secondLine} for {this.state.company}
          </p>
          <button onClick={() => {
              this.setState(() => {
                return {
                  name: {firstLine: 'Crowdyvest', secondLine: 'payment backlog'},
                }
              }, () => {});
              // console.log(this.state);
           }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
