angular.module('Spree').controller 'SearchController', ['$scope', ($scope, $stateParams) ->
  $scope.products = []

  if($routeParams.q != '')
    $scope.products = window.fake_products(8);
]