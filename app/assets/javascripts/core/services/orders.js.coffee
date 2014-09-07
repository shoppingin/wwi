angular.module('Spree').factory 'Order', ['$resource', ($resource) ->
  $resource '/api/orders', {}, {
    'query': {
      'method': 'GET',
      isArray:true,
      transformResponse: (data, headers) ->
        _data = JSON.parse(data)
        _data.products
    }
  }
]
