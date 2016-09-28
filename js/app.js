'use strict';

var converterApp = angular.module('converterApp', ['ui.router', 'ngZ2UConverter']);

    converterApp.controller('ApplicationController', function($scope, $filter) {//GLOBAL FILTER

      var vm = this;
      vm.name = "Converter Application";
      vm.zgText = "";
      vm.filterByController = function(){
        vm.filterByContrlResult = $filter('convertToUnicode')(vm.zgText);
      }

    });
