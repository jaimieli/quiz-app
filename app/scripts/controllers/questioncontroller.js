'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestioncontrollerCtrl
 * @description
 * # QuestioncontrollerCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionController', function ($scope) {
    this.newQuestion = {options:[]};
    this.options=[];
    this.addOption = function() {
      this.newQuestion.options.push({value:''});
    };
    this.submit = function() {
      this.newQuestion.difficulty = +this.newQuestion.difficulty;
      $scope.quiz.push(this.newQuestion);
      this.newQuestion = {options:[]};
    };
  });
