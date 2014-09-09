angular.module('Spree').factory 'Purchase', ($http, $cookieStore) ->
  next: (options, success, error)->
    $http.put('/api/checkouts/'+options['number']+'/next.json', {order: options['order']}).success((res) ->
      success(res)
    ).error error
    return

angular.module('Spree').factory "Auth", ($http, $resource, $cookieStore) ->
  changeUser = (user) ->
    angular.extend currentUser, user
    return
  accessLevels = routingConfig.accessLevels
  userRoles = routingConfig.userRoles
  currentUser = $cookieStore.get("user") or
    email: ""
    role: userRoles.public

  $cookieStore.remove "user"
  authorize: (accessLevel, role) ->
    role = currentUser.role  if role is `undefined`
    accessLevel.bitMask & role.bitMask

  isLoggedIn: (user) ->
    user = currentUser  if user is `undefined`
    user.role.title is userRoles.user.title or user.role.title is userRoles.admin.title

  register: (user, success, error) ->
    $http.post("/signup", user).success((res) ->
      changeUser res
      success()
      return
    ).error error
    return

  login: (user, success, error) ->
    $http.post("/login.js", user).success((user) ->
      changeUser {email: user.user.email, role: user.role}
      success user
      return
    ).error error
    return

  logout: (success, error) ->
    $http.get("/logout").success(->
      changeUser
        username: ""
        role: userRoles.public

      success()
      return
    ).error error
    return

  # guestRegistration: (guest, success, error) ->
  #   $http.post("/checkout/registration", guest).success((user) ->
  #     success user
  #     return
  #   ).error error
  #   return

  accessLevels: accessLevels
  userRoles: userRoles
  user: currentUser

angular.module('Spree').factory "Users", ($http) ->
  getAll: (success, error) ->
    $http.get("/users").success(success).error error
    return
