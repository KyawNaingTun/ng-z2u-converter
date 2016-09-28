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
      vm.zgText = "ျမန္မာယူနီကုဒ္ႏွင့္ ပါတ္သက္ေသာ သတင္းမ်ား၊ ေဆာင္းပါးမ်ားႏွင့္ ျမန္မာယူနီကုဒ္ဧရိယာ အဖြဲ႕၏ လႈပ္ရွား ေဆာင္ရြက္မႈမ်ားကို www.mmunicode.org တြင္ တင္ျပေပးသြားမွာ ျဖစ္ပါတယ္။";
      // vm.zgText = "ကောင်းသောနေ့ခင်းလေးပါ";
      vm.filterByController = function(){
        vm.filterByContrlResult = $filter('convertToUnicode')(vm.zgText);
      }

    });
