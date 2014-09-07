angular.module('Spree').controller "ProfileCtrl", [
  "$rootScope"
  "$scope"
  "$location"
  "Auth"
  ($rootScope, $scope, $location, Auth) ->
    $scope.user = Auth.user
    $scope.userRoles = Auth.userRoles
    $scope.accessLevels = Auth.accessLevels
]
