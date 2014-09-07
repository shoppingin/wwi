angular.module('Spree').controller 'CompanyController', ['$scope', '$routeParams', ($scope, $routeParams) ->
  $scope.company = {
    name: "H&M Hilversum",
    image: 'frontend/hm_pand.jpg'
  }

  $scope.products = window.fake_products(10)
]
