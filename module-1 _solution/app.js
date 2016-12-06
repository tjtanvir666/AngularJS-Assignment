// split : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

(function (){
'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',lunchCheck);

  lunchCheck.$inject = ['$scope'];
  function lunchCheck($scope){
    $scope.items = "";
    $scope.color = "";
    $scope.boxColor = "";
    $scope.separates = function(){


      $scope.itemArr = $scope.items.split( /\s*,\s*/);  //look the website above for this
        //console.log("the serial" + $scope.itemArr.length);

        if(  $scope.itemArr.length <= 3 && $scope.itemArr[0] != ""  ){
          $scope.text = "Enjoy";
          $scope.color = "green";
          $scope.boxColor = "green";
        }
       else  if(  $scope.itemArr.length > 3 ){
          $scope.text = "too much";
          $scope.color = "green";
          $scope.boxColor = "green";
        }
        else if($scope.itemArr[0] == ""){ //the split by default returns a empty string if there is no string inputted so we validated it so that the length is not 1 by default
          $scope.text = "Please enter data first";
          $scope.color = "red";
          $scope.boxColor = "red";
        }


    };

  }

})();
