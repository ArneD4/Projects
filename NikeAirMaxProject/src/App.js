import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { nikeAir } from "./data";
/*
npm install react-router-dom
*/
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <NavigationBar />
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog data={nikeAir} />} />
      </Router>
    )
  }
}