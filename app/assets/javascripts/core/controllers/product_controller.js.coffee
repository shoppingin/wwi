angular.module('Spree').controller 'ProductController', ['$scope', '$stateParams', 'Product', ($scope, $stateParams, Product) ->
  $scope.product = Product.get(id: $stateParams.id)
]

stub_product = ()->
  {
    id: '1',
    name: 'dstrezzed puffer jacket bruin',
    brand: 'DSTREZZED',
    price: '678.1',
    discount: '567,9',
    product_types: ['A', 'B', 'C'],
    description: "
You've gone incognito. Pages you view in incognito tabs won't stick around in your browser's history, cookie store, or search history after you've closed all of your incognito tabs. Any files you download or bookmarks you create will be kept.
However, you aren't invisible. Going incognito doesn't hide your browsing from your employer, your internet service provider, or the websites you visit.
Learn more about incognito browsing. Because Google Chrome does not control how extensions handle your personal data, all extensions have been disabled for incognito windows. You can reenable them individually in the extensions manager.
    ",
    image: 'frontend/detailfoto.jpg',
    images: [
      'frontend/detailfoto2.jpg',
      'frontend/detailfoto3.jpg',
      'frontend/detailfoto4.jpg',
      'frontend/detailfoto5.jpg',
      'frontend/detailfoto6.jpg'
    ]
  }
