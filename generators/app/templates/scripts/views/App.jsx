'use strict'

import React from 'react'

require('./app.scss')

class App extends React.Component {
  render () {
    return (
      <div className='pure-u-1'>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App
