'use strict'

let generator = require('yeoman-generator')
let fs = require('fs')
let yosay = require('yosay')

module.exports = generator.Base.extend({
  constructor: function () {
    generator.Base.apply(this, arguments)
    this.argument('name', {type: String, required: true})
  },
  writing: function () {
    let componentFolder = this.destinationRoot() + '/scripts/views'
    fs.mkdir(componentFolder, (err) => {
      if (err) return this.log(yosay('Could not create component folder'))

      let componentFP = componentFolder + '/' + this.name + '.jsx'

      this.template('component.jsx', componentFP)
    })
  }
})
