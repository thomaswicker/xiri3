/*
     _    ____  ____  _     ___ ____    _  _____ ___ ___  _   _       _ ____
    / \  |  _ \|  _ \| |   |_ _/ ___|  / \|_   _|_ _/ _ \| \ | |     | / ___|
   / _ \ | |_) | |_) | |    | | |     / _ \ | |  | | | | |  \| |  _  | \___ \
  / ___ \|  __/|  __/| |___ | | |___ / ___ \| |  | | |_| | |\  | | |_| |___) |
 /_/   \_\_|   |_|   |_____|___\____/_/   \_\_| |___\___/|_| \_|  \___/|____/
*/

//Setting up the core Angular App - potion
var xiri = angular.module('xiriApp', ['ngRoute']);

/*
  ____   ___  _   _ _____ ___ _   _  ____
 |  _ \ / _ \| | | |_   _|_ _| \ | |/ ___|
 | |_) | | | | | | | | |  | ||  \| | |  _
 |  _ <| |_| | |_| | | |  | || |\  | |_| |
 |_| \_\\___/ \___/  |_| |___|_| \_|\____|

*/

// ###################### BEGIN POTION'S ROUTING ###################### //

xiri.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    // route for the default url home page
    .when('/', {
      templateUrl : 'partials/content.html',
      controller  : 'MainController',
      activePage  : 'home'
    })
}]);

// ###################### END POTION'S ROUTING ###################### //



/*
   ____ ___  _   _ _____ ____   ___  _     _     _____ ____  ____
  / ___/ _ \| \ | |_   _|  _ \ / _ \| |   | |   | ____|  _ \/ ___|
 | |  | | | |  \| | | | | |_) | | | | |   | |   |  _| | |_) \___ \
 | |__| |_| | |\  | | | |  _ <| |_| | |___| |___| |___|  _ < ___) |
  \____\___/|_| \_| |_| |_| \_\\___/|_____|_____|_____|_| \_\____/
*/

// ###################### BEGIN POTION'S ANGULAR CONTROLLERS ########################## //

// create the PotionController and inject Angular's $scope
xiri.controller('MainController', ['$scope', '$route', 'xiriServices', function($scope, $route, xiriServices) {
  $scope.message = 'Message from Home Page';
}]);

// create the HomeController and inject Angular's $scope
xiri.controller('ContentController', ['$scope', '$route', 'xiriServices', function($scope, $route, xiriServices) {

}]);
//
// // create the HomeController and inject Angular's $scope
// xiri.controller('ComponentsController', ['$scope', '$route', 'xiriServices', function($scope, $route, xiriServices) {
//
// }]);


// ###################### END POTION'S ANGULAR CONTROLLERS ##########################


/*
  ____ ___ ____  _____ ____ _____ _____     _______ ____
 |  _ \_ _|  _ \| ____/ ___|_   _|_ _\ \   / / ____/ ___|
 | | | | || |_) |  _|| |     | |  | | \ \ / /|  _| \___ \
 | |_| | ||  _ <| |__| |___  | |  | |  \ V / | |___ ___) |
 |____/___|_| \_\_____\____| |_| |___|  \_/  |_____|____/

*/

// ###################### BEGIN POTION'S ANGULAR CUSTOM DIRECTIVES ##################### //

xiri.directive('superhero', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {

      //Adding class to custom <superhero> element
      element.addClass('superhero');
    },
    scope: {}
  }
});


/*
  ____  _____ ______     _____ ____ _____ ____
 / ___|| ____|  _ \ \   / /_ _/ ___| ____/ ___|
 \___ \|  _| | |_) \ \ / / | | |   |  _| \___ \
  ___) | |___|  _ < \ V /  | | |___| |___ ___) |
 |____/|_____|_| \_\ \_/  |___\____|_____|____/

*/

// ###################### BEGIN POTION'S ANGULAR SERVICES ###################### //

xiri.service('xiriServices', function () {
  var xiriObject = {};

  // Function to call JS for adding default classes to new custom Angular directives
  xiriObject.initDirectiveClasses = function () {

    // Adding in variable to detect IE as user agent for specific styling
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
  };

  // returning the potionObject within this services so that it can be accessed and initialized by Controllers
  return xiriObject;
});

// ###################### END POTION'S ANGULAR SERVICES ######################### //
