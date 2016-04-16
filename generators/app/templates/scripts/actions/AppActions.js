'use strict'

import alt from 'shared/alt'

class AppActions {
  constructor () {
    this.generateActions('newGreetingSet')
  }

  setNewGreeting (greeting) {
    this.actions.newGreetingSet(greeting)
  }
}

module.exports = alt.createActions(AppActions)
