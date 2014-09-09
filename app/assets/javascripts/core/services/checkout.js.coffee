angular.module('Spree').factory 'Checkout', ['$resource', ($resource) ->
  $resource '/checkout/registration', {order: {email: '@email'}},
    updateRegistration:
      method: 'PUT'
]
