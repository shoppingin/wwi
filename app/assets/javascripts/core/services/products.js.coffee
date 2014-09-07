angular.module('Spree').factory 'Product', ['$resource', ($resource) ->
  $resource '/api/products/:id', {id: '@id'}, {
    'get' : {
      'method': 'GET',
      isArray: false
    },
    'query': {
      'method': 'GET',
      isArray:true,
      transformResponse: (data, headers) ->
        _data = JSON.parse(data)
        _data.products
    }
  }
]