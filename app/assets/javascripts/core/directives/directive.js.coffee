angular.module('Spree').directive "accessLevel", [
  "Auth"
  (Auth) ->
    return (
      restrict: "A"
      link: ($scope, element, attrs) ->
        updateCSS = ->
          if userRole and accessLevel
            unless Auth.authorize(accessLevel, userRole)
              element.css "display", "none"
            else
              element.css "display", prevDisp
          return
        prevDisp = element.css("display")
        userRole = undefined
        accessLevel = undefined
        $scope.user = Auth.user
        $scope.$watch "user", ((user) ->
          userRole = user.role  if user.role
          updateCSS()
          return
        ), true
        attrs.$observe "accessLevel", (al) ->
          accessLevel = $scope.$eval(al)  if al
          updateCSS()
          return

        return
    )
]
angular.module('Spree').directive "activeNav", [
  "$location"
  ($location) ->
    normalizeUrl = (url) ->
      url = url + "/"  if url[url.length - 1] isnt "/"
      url
    return (
      restrict: "A"
      link: (scope, element, attrs) ->
        anchor = element[0]
        anchor = element.find("a")[0]  unless element[0].tagName.toUpperCase() is "A"
        path = anchor.href
        scope.location = $location
        scope.$watch "location.absUrl()", (newPath) ->
          path = normalizeUrl(path)
          newPath = normalizeUrl(newPath)
          if path is newPath or (attrs.activeNav is "nestedTop" and newPath.indexOf(path) is 0)
            element.addClass "active"
          else
            element.removeClass "active"
          return

        return
    )
]