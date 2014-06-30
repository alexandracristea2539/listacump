/**
 * Created by alexandra.cristea on 6/30/2014.
 */

var app = angular.module('Store',[]);
//fhdsfh
app.controller('ShopCtrl', ['$scope', function($scope) {

    $scope.items = [
        {id: 1, text: 'Lapte', bought: false},
        {id: 2, text: 'Oua', bought: true},
        {id: 3, text: 'Cola', bought: false}
    ];

    $scope.clearBought = function() {
        $scope.items = filter($scope.items, function (item) {
            return !item.bought;
        });
    }
    $scope.addItem = function() {
        $scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.items.length + 1) });
        $scope.itemEntry = '';
    }

   $scope.addItem1 = function() {

        $scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.items.length + 1) });
        $scope.itemEntry = '';
    }

    $scope.isBought = function(bought) {
        return (bought) ? 'bought' : 'not-bought';

    }

}]);
