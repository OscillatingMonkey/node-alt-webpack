'use strict'

let yeoman = require('yeoman-generator')
let yosay = require('yosay')

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments)
    this.argument('appName', {type: String, required: true})
  },
  prompting: function () {
    this.log(yosay('Hi! We are building a new Alt React Flux project!'))
  },
  writing: {
    config: function () {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        {
          appName: this.appName
        }
      )
      this.template('README.md', 'README.md', this.context)
    },
    projectFiles: function () {
      this.template('webpack.config.js', 'webpack.config.js', this.context)
      this.template('webpack.development.config.js', 'webpack.development.config.js', this.context)
      this.template('webpack.production.config.js', 'webpack.production.config.js', this.context)
      this.template('server.js', 'server.js', this.context)
      this.directory('config', 'config', this.context)
      this.directory('dist', 'dist', this.context)
      this.directory('scripts', 'scripts', this.context)
      this.config.save()
    }
  },
  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      skipInstall: this.options['skip-install'],
      callback: function () {
        console.log('Good to go! Start the application by typing npm run dev')
      }
    })
  }
})
