import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'

import './css/style';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
)

const App = () => (
  <div className="container">
    <NavBar />
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/profile" component={Profile}/>
  </div>
)

render(<Router><App /></Router>, document.getElementById('app'))
