# angular.module('Spree').factory('Checkout', [$resource, function($resource) {
#   return $resource('/checkout/registration', null, {
#     updateRegistration: {
#       method: 'PUT',
#       params: {
#         order: {
#           email: 'email'
#         }
#       }
#     }
#   });
# }]);

angular.module('Spree').factory 'Checkout', ['$resource', ($resource) ->
  $resource '/checkout/registration', {},
    updateRegistration:
      method: 'PUT'
]
