'use strict'

let path = require('path')
let assert = require('yeoman-assert')
let yotest = require('yeoman-test')

describe('react-webpack-alt', () => {
  let appGen = path.join(__dirname, '../../../generators/app')

  /**
  *  Return base generated app
  *  @param {String} name
  *  @param (Function) callbacka
  **/
  function createApp (name, callback) {
    yotest.run(appGen).withArguments([name]).on('end', callback)
  }

  describe('When creating base application', () => {
    it ('should add all skeleton files to run the project out of the box', (done) => {
      createApp('TestApplication', () => {
        assert.file([
          'package.json',
          'webpack.config.js',
          'webpack.development.config.js',
          'webpack.production.config.js',
          'server.js',
          'package.json',
          'scripts/actions/AppActions.js',
          'scripts/entry.jsx',
          'scripts/shared/alt.js',
          'scripts/stores/AppStore.js',
          'scripts/views/App.jsx',
          'scripts/views/Home.jsx',
          'scripts/views/app.scss',
          'scripts/views/routes.jsx'
        ])
        done()
      })
    })
  })
})
