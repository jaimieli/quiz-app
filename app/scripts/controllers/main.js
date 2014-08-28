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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.quiz = [
      {
        "q": "Who is the best ping pong player at FSA?",
        'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {answer : "Nimit"} , { 'value': "Patrick"}],
        'answer': "Nimit",
        'difficulty': 3
      },
      { "q": "Which robot name was chanted during Lego Mindstorms?",
        'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {answer : 'johnny5'} , { 'value': 'none of the above'}],
        'answer':'noHope.js',
        'difficulty': 2
      },
      {
        'q': "Out of the following frontend frameworks, which framework is most rails-like",
        'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {answer : 'Backbone.js'} , { 'value': 'Meteor.js'}],
        'answer':'Ember.js',
        'difficulty': 1
      },
      {
        'q': "Which project used a local data store?",
        'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {answer : 'WikiWalker'} , { 'value': 'WikiStack'}],
        'answer':'Twitter.js',
        'difficulty': 3
      }
    ];
  });
