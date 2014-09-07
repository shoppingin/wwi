angular.module('Spree').controller 'AuthController', ['$scope', '$location', ($scope, $location) ->
  $scope.error = ''

  $scope.auth = () ->
    if this.email == 'test' && this.password == 'simple'
      $scope.error = ''
      window.current_user = true
      $location.path('/')
    else
      window.current_user = false
      $scope.error = 'Wrong user/password.'

]
