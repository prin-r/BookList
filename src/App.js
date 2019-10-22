import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { BookProvider } from './contexts/Book'
import LandingPage from 'pages/Landing'
import Reading from 'pages/Reading'
import Wip from 'pages/Wip'
import NotFoundPage from 'pages/404'

export default () => (
  <BookProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/reading" component={Reading} />
        <Route exact path="/wip" component={Wip} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </Router>
  </BookProvider>
)
