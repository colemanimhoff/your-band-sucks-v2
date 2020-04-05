import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Albums from './pages/Albums'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/albums">
            <Albums />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
