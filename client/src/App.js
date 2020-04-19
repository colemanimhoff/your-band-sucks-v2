import React from 'react'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import AddAlbum from './pages/AddAlbum'
import Albums from './pages/Albums'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/albums/new">
            <AddAlbum />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
