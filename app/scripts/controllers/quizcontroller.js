'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizcontrollerCtrl
 * @description
 * # QuizcontrollerCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizController', function ($scope, $timeout) {
      $scope.timeLeft = 30;

      var countdown = function() {
        $scope.timeLeft--;
        if ($scope.timeLeft > 0) {
          $timeout(countdown, 1000);
        }
      };

      $timeout(countdown, 1000);

      $scope.quiz = [
        {
          "q": "Who is the best ping pong player at FSA?",
          'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
          'answer': "Nimit",
          'difficulty': 3
        },
        { "q": "Which robot name was chanted during Lego Mindstorms?",
          'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
          'answer':'noHope.js',
          'difficulty': 1
        },
        {
          'q': "Out of the following frontend frameworks, which framework is most rails-like",
          'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
          'answer':'Ember.js',
          'difficulty': 2
        },
        {
          'q': "Which project used a local data store?",
          'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
          'answer':'Twitter.js',
          'difficulty': 3
        }
      ];
      // $scope.letters = ['A', 'B', 'C', 'D'];
      $scope.check = function(opt, quest) {
        if (!quest.answered && opt===quest.answer){
          $scope.$emit('increase_score');
        }
        quest.answered = true;
      };
  });
