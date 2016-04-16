'use strict'

import AppActions from 'actions/AppActions'
import AppStore from 'stores/AppStore'
import React from 'react'

import config from 'config'

import connectToStores from 'alt/utils/connectToStores'

require('./app.scss')

class Home extends React.Component {
  static getPropsFromStores () {
    return AppStore.getState()
  }

  static getStores () {
    return [AppStore]
  }

  handleClick () {
    AppActions.setNewGreeting(config.newGreeting)
  }

  render () {
    return (
      <div className='pure-u-1'>
        <h1>{this.props.greeting}</h1>
        <input className='pure-button' type='button' value='Change Greeting' onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

module.exports = connectToStores(Home)
