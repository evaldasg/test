import React from 'react'
import { render } from 'react-dom'
import { Route, Switch } from 'react-router'
import Home from './Home'
import NavBar from './NavBar'

//import './css/style'

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

const NoMatch = ({ location }) => (
  <div className="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> Sorry, <code>{location.pathname}</code> page not found!
  </div>
)


const App = () => (
  <div className="container">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
      <Route component={NoMatch}/>
    </Switch>
  </div>
)

export default App
