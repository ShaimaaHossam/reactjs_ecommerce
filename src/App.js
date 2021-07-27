import React from 'react';
import './App.css';
import Navbar from './Components/js/Navbar.js';
import Category from './Components/js/Category.js';
class App extends React.Component {
  state={currency : 1};
  updateCurrency = (curren) =>{
    this.setState({currency:curren})
  };
  render(){
    return (
      <div className="App">
        <Navbar updateCurrency={this.updateCurrency} currency={this.state.currency} />
        <Category currency={this.state.currency}/>
      </div>
    );
  }
  
}

export default App;
