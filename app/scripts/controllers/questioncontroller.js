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
    this.count = 0;
    this.addOption = function() {
      this.newQuestion.options.push({value:''});
      this.count++;
    };
    this.submit = function() {
      if(this.count < 2) {
        return alert('You need at least 2 options.');
      }
      else {
        this.newQuestion.difficulty = +this.newQuestion.difficulty;
        $scope.quiz.push(this.newQuestion);
        this.newQuestion = {options:[]};
        this.count = 0;
      }
    };
  });
