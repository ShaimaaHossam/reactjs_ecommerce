import React from 'react';
import './App.css';
import Navbar from './Components/js/Navbar.js';
import Category from './Components/js/Category.js';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
class App extends React.Component {
  
  render(){
    
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar/>
          <Category/>
        </div>
      </ApolloProvider>
    );
  }
  
}

export default App;
