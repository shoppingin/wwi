angular.module('Spree').controller "NavCtrl", [
  "$rootScope"
  "$scope"
  "$location"
  "Auth"
  ($rootScope, $scope, $location, Auth) ->
    $scope.user = Auth.user
    $scope.userRoles = Auth.userRoles
    $scope.accessLevels = Auth.accessLevels
    $scope.logout = ->
      Auth.logout (->
        $location.path "/login.js"
        return
      ), ->
        $rootScope.error = "Failed to logout"
        return

      return
]
angular.module('Spree').controller "LoginCtrl", [
  "$rootScope"
  "$scope"
  "$location"
  "$window"
  "Auth"
  ($rootScope, $scope, $location, $window, Auth) ->
    $scope.rememberme = true
    $scope.login = ->
      Auth.login
        spree_user:
          email: $scope.email
          password: $scope.password
          rememberme: $scope.rememberme
      , ((res) ->
        $location.path "/"
        return
      ), (err) ->
        $rootScope.error = "Failed to login"
        return

      return

    $scope.loginOauth = (provider) ->
      $window.location.href = "/auth/" + provider
      return
]
angular.module('Spree').controller "RegisterCtrl", [
  "$rootScope"
  "$scope"
  "$location"
  "Auth"
  ($rootScope, $scope, $location, Auth) ->
    $scope.role = Auth.userRoles.user
    $scope.userRoles = Auth.userRoles
    $scope.register = ->
      Auth.register
        spree_user:
          email: $scope.email
          password: $scope.password
      , (->
        $location.path "/"
        return
      ), (err) ->
        $rootScope.error = err
        return

      return
]