'use strict'

import React from 'react'

import App from './App'
import Home from './Home'

import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import {render} from 'react-dom'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('app'))
