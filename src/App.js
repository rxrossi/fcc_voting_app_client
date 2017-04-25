import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigationBar';
import Greetings from './Greetings';
import Login from './Login';

class App extends Component {
  render() {
    return (
			<div className="container">
				<NavigationBar />
				<Route exact path="/" component={Greetings} />
				<Route path="/login" component={Login} />
			</div>
    );
  }
}

export default App;
