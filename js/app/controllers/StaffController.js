function StaffController() {
  this.name = 'max'
  this.email = 'max@gmail.com'
  this.phone = '9999999'
}

angular
  .module('app')
  .controller('StaffController', StaffController)
