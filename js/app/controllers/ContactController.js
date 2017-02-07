function ContactController() {
  var vm = this

  this.name = 'mike'
  this.email = 'mikerand1991@gmail.com'
  this.phone = '4072525275'

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
