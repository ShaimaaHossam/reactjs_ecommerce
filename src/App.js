import React from 'react';
import './App.css';
import Navbar from './Components/js/Navbar.js';
import Category from './Components/js/Category.js';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Category/>
      </div>
    );
  }
  
}

export default App;
