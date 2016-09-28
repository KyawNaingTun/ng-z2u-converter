'use strict';

var converterApp = angular.module('converterApp', ['ui.router', 'ngZ2UConverter']);
    converterApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/home');
          var templatesDir = "./templates";
           // Use $stateProvider to configure your states.
          $stateProvider
          /*
          * Home Page routes
          */
              .state('home', {
                  url: '/home',
                  templateUrl : templatesDir+'/home.html'
              });

    }]);
    converterApp.controller('ApplicationController', function($scope, $filter) {//GLOBAL FILTER

      var vm = this;
      vm.name = "Converter Application";
      vm.zgText = "အေပါင္ထားသူသည္ အတိုး၁လ ၁၂ရက္ေပးရမည္ကို၁လတိုးဘဲပါလာလို႔ ၁လစာႀကိဳးတိုးရွင္းသည္။ေဘာက္ခ်ာစာရြက္၏ေနာက္တြင္လက္ေရးျဖင့္ေရးေပးမည္။computerတြင္data မွတ္ထားမည္။Print ထုတ္ရန္မလိုပါ။ ႀကိဳသြင္းမူ႔က ိုမေရြးမီ၊ ေငြတိုးမယူမီ၊ အရင္းမသြင္းမီ ၁ႀကိမ္ထက္ပိုၿပီးလုပ္ႏိုင္သည္။";
      vm.filterByController = function(){
        vm.filterByContrlResult = $filter('converterAppFilter')(vm.zgText);
      }

    });
