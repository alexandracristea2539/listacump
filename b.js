/**
 * Created by alexandra.cristea on 6/30/2014.
 */

var app = angular.module('Store',[]);


app.controller('ShopCtrl', ['$scope', function ($scope) {

    $scope.items = [
        {id: 1, text: 'Lapte', bought: false},
        {id: 2, text: 'Oua',bought: false},
        {id: 3, text: 'Cola', bought: false}
    ];

    $scope.control = function () {
        $scope.checked = !$scope.checked;
    };

    $scope.produs = {
        text: '',
        descriere: ''
    };
    $scope.addItem = function() {
        $scope.items.push($scope.produs);
        $scope.produs={
            text: '',
            descriere: ''};
    };

    $scope.clearBought = function() {
         var oldItems=$scope.items;
         $scope.items=[];
        angular.forEach(oldItems,function(item) {
            if (!item.bought) $scope.items.push(item)
        });



    };


    $scope.isBought = function(bought) {
        return (bought) ? 'bought' : 'not-bought';

    }

}]);

app.controller('EditCtrl', ['$scope', function($scope) {

    $scope.editorEnabled = false;
    $scope.enableEditor = function() {
        $scope.editorEnabled = true;
        $scope.editableTitle = $scope.item.text;
        $scope.editableTitle1 = $scope.item.descriere;
    };
    $scope.disableEditor = function() {
        $scope.editorEnabled = false;
    };
    $scope.save = function() {
        $scope.item.text = $scope.editableTitle;
        $scope.item.descriere = $scope.editableTitle1;
        $scope.disableEditor();
    };


}]);
