import React from 'react';
import './App.css';
import Navbar from './Components/js/Navbar.js';
import Category from './Components/js/Category.js';
import Product from './Components/js/Product.js';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currency: 0,
      bg: "white",
    };
  }
  changeBackground = (background) =>{
    this.setState({bg: background});
  }
  updateCurrency = (value) => {
    this.setState({ currency: value});
  };
  addProduct = (product) => {
    let joined = [];
    //joined.push(this.state.cart);
    joined.push(product);
    this.setState({cart: joined});
    console.log("CART RECEIVED");
    console.log(this.state.cart);
  }
  render(){
    
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Navbar currency={this.state.currency} updateCurrency={this.updateCurrency} cart={this.state.cart} switchBackground={this.changeBackground}/>
            <Switch>
                <Route exact path="/" render={(props)=>(
                  <Category {...props} currency={this.state.currency} background={this.state.bg}  cart={this.state.cart} />
                )} />            
                <Route exact path="/:id" render={(props)=>(
                  <Product {...props} currency = {this.state.currency}  cart={this.state.cart} addProduct={this.addProduct}/>
                )} /> 
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
  
}

export default App;
