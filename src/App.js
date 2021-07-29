import React from 'react';
import './App.css';
import Navbar from './Components/js/Navbar.js';
import Category from './Components/js/Category.js';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currency: 0 };
  }
  updateCurrency = (value) => {
    this.setState({ currency: value});
  };
  render(){
    
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Navbar currency={this.state.currency} updateCurrency={this.updateCurrency}/>
            <Switch>
              <Route path="/">
                <Category currency={this.state.currency} />
              </Route>
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
  
}

export default App;
