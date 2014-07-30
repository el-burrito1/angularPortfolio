var app = angular.module('myApp' , ['ngRoute']);

app.config(['$routeProvider' , function ($routeProvider){
		$routeProvider.when('/' , {
			templateUrl: 'partials/index',
			controller: 'indexController'
		}).when('/rings' , {
			templateUrl: 'partials/rings',
			controller: 'indexController'
		}).otherwise({redirectTo: '/'})
	}]);

app.controller('indexController' , ['$scope' , '$timeout' , function($scope , $timeout){
	$scope.test = function(){
		console.log($('.secondText').text())
	};
	
	$scope.business = true;
	$scope.tech = false;
	$scope.team = false;

	$scope.showBusiness = false;
	$scope.showTech = false;
	$scope.showTeam = false;

	window.scope = $scope;

	$scope.businessClick = function(){
		$('.topicBall3').addClass('shrink');
		$('.topicBall2').addClass('shrink');
		$('.topicBall').addClass('mainShrink');
		$('.whiteContain').addClass('outro');
		$('.layer2').addClass('outro');
		$('.layer1').addClass('gone');

		$timeout(function(){
			$scope.showBusiness = true
		}, 600)
	}

	$scope.techClick = function(){
		$('.topicBall3').addClass('shrink');
		$('.topicBall2').addClass('shrink');
		$('.topicBall').addClass('mainShrink');
		$('.whiteContain').addClass('outro');
		$('.layer2').addClass('outro');
		$('.layer1').addClass('gone');

		$timeout(function(){
			$scope.showTech = true
		}, 600)
	}

	$scope.teamClick = function(){
		$('.topicBall3').addClass('shrink');
		$('.topicBall2').addClass('shrink');
		$('.topicBall').addClass('mainShrink');
		$('.whiteContain').addClass('outro');
		$('.layer2').addClass('outro');
		$('.layer1').addClass('gone');

		$timeout(function(){
			$scope.showTeam = true
		}, 600)
	}

	$scope.home = function(){
		// $('.topicBall3').removeClass('shrink');
		// $('.topicBall2').removeClass('shrink');
		// $('.topicBall').removeClass('mainShrink');
		// $('.whiteContain').removeClass('outro');
		// $('.layer2').removeClass('outro');
		// $('.layer1').removeClass('gone');

		if($scope.showBusiness){
			$('.flyTop').addClass('exit');
		} else if($scope.showTech){
			$('.reFind').addClass('salir');
			$('.reFindphoto').addClass('photosalir')
		} else if($scope.showTeam){
			$('.team1').addClass('home1');
			$('.team2').addClass('home2');
			$('.team3').addClass('home3');
		}

		$timeout(function(){

			$('.topicBall3').removeClass('shrink');
			$('.topicBall2').removeClass('shrink');
			$('.topicBall').removeClass('mainShrink');
			$('.whiteContain').removeClass('outro');
			$('.layer2').removeClass('outro');
			$('.layer1').removeClass('gone');
			$('.flyTop').removeClass('exit');
			$('.reFind').removeClass('salir');
			$('.reFindphoto').removeClass('photosalir');
			$('.team1').removeClass('home1');
			$('.team2').removeClass('home2');
			$('.team3').removeClass('home3');

			$scope.showBusiness = false;
			$scope.showTech = false;
			$scope.showTeam = false;
		},300)

		// $scope.showBusiness = false;
		// $scope.showTech = false;
		// $scope.showTeam = false;

	}

	$scope.switchBusiness = function(){
		if($scope.showBusiness || $scope.showTech || $scope.showTeam){
			if($scope.showTech = true){
				$scope.showTech = false;
				$scope.showBusiness = true;
			} 

			if($scope.showTeam = true){
				$scope.showTeam = false;
				$scope.showBusiness = true;
			}
		}
	}

	$scope.switchTech = function(){
		if($scope.showBusiness || $scope.showTech || $scope.showTeam){
			if($scope.showBusiness = true){
				$scope.showBusiness = false;
				$scope.showTech = true;
			} 

			if($scope.showTeam = true){
				$scope.showTeam = false;
				$scope.showTech = true;
			}
		}
	}

	$scope.switchTeam = function(){
		if($scope.showBusiness || $scope.showTech || $scope.showTeam){
			if($scope.showBusiness = true){
				$scope.showBusiness = false;
				$scope.showTeam = true;
			} 
			if($scope.showTech = true){
				$scope.showTech = false;
				$scope.showTeam = true;
			}
		}
	}


}])
