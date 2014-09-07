angular.module('Spree').controller 'ProductsController', ['$scope', 'Product', ($scope, Product, $stateParams) ->
  #$scope.page = $stateParams.page

  $scope.products = Product.query() #window.fake_products(8)
  #$scope.brands   = window.fake_brands(8)
]
