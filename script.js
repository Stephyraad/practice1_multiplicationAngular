var myApp= angular.module("myApp", []);

myApp.controller("multiCtr", function ($scope, $attrs, $rootScope){
		function populateNumbers(x){
		var numbers=[];
		for( var i=0; i<x; i++){
			numbers[i] = i+1;
		};
		return numbers;

	}

	$scope.compute= function(a,b){
		return a * b;
	}

	$scope.numberLimit= $attrs.initialNumberLimit || 10;

	$scope.$watch("numberLimit", function(limit){
		$scope.numbers = populateNumbers(limit);
	});

	var activeFactorA, activeFactorB;

	$scope.setActiveFactors= function(a,b){
		activeFactorA= a;
		activeFactorB= b;
	};

	$scope.matchesFactor =function	 (a,b){
		return a === activeFactorA || b === activeFactorB;
	};
	$scope.clearActiveFactors= function(){
		activeFactorA = activeFactorB = null;
	};

	$scope.setActiveNumber= function (number){			// this is to display the number that the user clicked in the view
		$rootScope.$broadcast("displayData", number);
	};

	});

myApp.controller("displayNum", function($scope){
	$scope.$on("displayData", function (event, data){
		$scope.content = data;
	});
});
























