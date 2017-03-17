(function() {
    angular.module('myApp',['ngMaterial'])
        .controller('MainController', ['$scope', '$mdMedia', function($scope, $mdMedia) {
            $scope.Name = "Raounak";

            // For managing class of typed.js in header
            $scope.$watch(function() {
                if ($mdMedia('gt-md')) {
                    return true;
                } else {
                    return false;
                }

            }, function(response) {
                $scope.isViewGtMd = response;
                console.log("Left right view is :" + response);
            });


        }]);
})();