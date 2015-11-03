(function() {
  'use strict';

  angular.module('SampleApp',[])
    .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope){
    $scope.SampleMessage = "Welcome to my pointless app"

    $scope.handleSubmit = function(){
      if($scope.suppliedName){
        $scope.SampleMessage = "Hello " + $scope.suppliedName
      }
      else {
        $scope.SampleMessage = "Please supply a name"
      }
    }
  }

}());
