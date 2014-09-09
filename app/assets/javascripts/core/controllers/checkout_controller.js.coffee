angular.module('Spree').controller 'CheckoutController', [
  '$rootScope'
  '$scope'
  '$location'
  '$window'
  '$http'
  'Auth'
  'Purchase'
  'Checkout',
  '$cookies'
  ($rootScope, $scope, $location, $window, $http, Auth, Purchase, Checkout, $cookies) ->
    $scope.line_items = window.read_order_from_cookies()['line_items']
    $scope.user = Auth.user
    $scope.userRoles = Auth.userRoles
    $scope.accessLevels = Auth.accessLevels
    $scope.activeStep = if Auth.isLoggedIn() or $scope.guestEmail then 'step2' else 'step1'
    $scope.guestEmail = null
    $scope.billingAddress =
      firstname: ''
      lastname: ''
      city: ''
      zipcode: ''
      address_one: ''
      address_two: ''
      state: ''
      country_id: 1 # NL

    $scope.shippingAddress =
      firstname: ''
      lastname: ''
      city: ''
      zipcode: ''
      address_one: ''
      address_two: ''
      state: ''
      country_id: 1

    $scope.paymethod = 'online'

    $scope.onlyBilling = true
    $scope.checkoutType = 'reg'

    # Spree format
    $scope.guestRegistration = ->
      $cookies.request_method = 'PUT'
      successCallback = ->
        $scope.activeStep = 'step2'
      $http.put('/checkout/registration.json', {order: {email: $scope.guestEmail}}).success(successCallback)
      return

    $scope.login = ->
      Auth.login
        spree_user:
          email: $scope.email
          password: $scope.password
      , ((res) ->
        # show next step in UI
        $scope.activeStep = 'step2'
        return
      ), (err) ->
        $rootScope.error = "Failed to login"
        return

      return

    $scope.save_addresses_and_pay = ->
      Purchase.next
        number: $cookies.order
        order:
          bill_address: $scope.billingAddress,
          ship_address: if $scope.onlyBilling then null else $scope.shippingAddress
          payments: $scope.paymethod

      , ((res) ->
        console.log(res)
        order_id = res.number
        #if res.paymethod == 'online'
        popup_window = $window.open('/api/orders/'+order_id+'/payments/', "Payment", "width=640, height=480")
        popup_window.onbeforeunload = ->
          $location.path('/profile')
        #else
          #$location.path('/profile')
        return
      ), (err) ->
        $rootScope.error = "Failed to save"
        return
]
