angular.module('Spree').factory 'Checkout', ['$resource', ($resource) ->
  $resource '/checkout/registration', {},
    updateRegistration:
      method: 'PUT'
]
