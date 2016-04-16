'use strict'

import AppActions from 'actions/AppActions'
import config from 'config'
import alt from 'shared/alt'

class AppStore {
  constructor () {
    this.state = {
      greeting: config.oldGreeting
    }

    this.bindActions(AppActions)
  }

  onNewGreetingSet (greeting) {
    this.setState({
      greeting: greeting
    })
  }
}

module.exports = alt.createStore(AppStore, 'AppStore')
