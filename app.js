const app = angular.module('app', []);
app.controller('HelloController', function ($scope) {
    $scope.userName = "AngularJs1";
    $scope.showHelloWords = false;
    $scope.sayHello = function () {
        this.showHelloWords = true
    }
    $scope.$watch(() => [$scope.userName], (value, preValue) => {
      console.log(`userName changes from "${preValue}" to "${value}"`);
    }, true);
});
