'use strict'

let yeoman = require('yeoman-generator')
var yosay = require('yosay')
var slug = require('slug')

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments)
  },
  prompting: function () {
    console.log(this)
    let done = this.async()

    this.log(yosay('Hi! We are building a new Alt React Flux project!'))

    var prompts = [{
      type: 'input',
      name: 'packageName',
      message: 'Project Name?',
      default: 'alt-project',
      validate: (name) => {
        return !!name
      }
    }]

    this.prompt(prompts, function (props) {
      this.name = props.packageName
      this.slugName = slug(props.packageName, {lower: true})
      done()
    }.bind(this))
  },

  writing: {
    config: function () {
      this.template('package.json', 'package.json', this.context)
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
