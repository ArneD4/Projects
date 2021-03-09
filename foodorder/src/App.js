
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import './App.scss'
import Navbar from './components/NavBar';
import Data from './db.json'

import React, { Component } from 'react'

export default class App extends Component {


    

  state = {
    products: [],
    check: false
  }

  componentDidMount() {
    this.getProducts();
  }

 getProducts = ()=>{
    const data = Data.array
    this.setState({products:data, check: true})
  }





  render() {
    return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          {this.state.check === true && <Home
                  products={this.state.products}
                  addToCart={this.addToCart}
                  cart={this.state.cart}
          />}
        </Route>
      </Router>
    </div>
    )
  }
}
