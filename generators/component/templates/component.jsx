'use strict'

import React from 'react'

require('./styles.scss')

class <%= name %> extends React.Component {
  render () {
    return (
      <div className='<%= name %>'>
      </div>
    )
  }
}

module.exports = <%= name %>
