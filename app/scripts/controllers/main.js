'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope) {
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
        $scope.score.value++;
      }
      quest.answered = true;
    };
    $scope.score = {value: 0};
    $scope.newQuestion = {options:[]};
    $scope.options=[];
    $scope.addOption = function() {
      $scope.newQuestion.options.push({value:''});
    };
    $scope.submit = function() {
      $scope.newQuestion.difficulty = +$scope.newQuestion.difficulty;
      $scope.quiz.push($scope.newQuestion);
      $scope.newQuestion = {options:[]};
    }
  });
