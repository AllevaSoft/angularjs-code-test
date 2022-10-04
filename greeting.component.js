App.controller('GreetingController', function ($scope, $location) {
  
  $scope.greet = function () {
    $scope.greeting = `Hello ${$scope.firstName} ${$scope.lastName}!`;
  };

  $scope.GoNext = () => {
    $location.path("/songs");
  };
});
