angular.module('starter.controller', []).controller('AppController', AppController);

function AppController($scope, ChatMessages) {

    $scope.isRetrieving = true;
    $scope.userName = '';

    // Get data from Firebase and bind to our $scope
    $scope.messages = ChatMessages;

    // Initialise temp input form
    $scope.form = {};

    // Listen for the firebase on data loaded event
    $scope.messages.$loaded(function () {
      $scope.isRetrieving = false;
      scrollDown();
    });

    // Store chat message to Firebase
    $scope.addMessage = function (input) {

      if ( ! $scope.userName.length) {
        $scope.userName = input;
        $scope.form.input = null;
        return;
      }

      $scope.messages.$add({
        content: input,
        user: $scope.userName
      }).then(function () {
        scrollDown();
        console.log('Added new message from ' + $scope.userName + ': ' + input);
      }, function(err) {
        console.log('Error: ' + err);
      });

      // Reset text field
      $scope.form.input = '';

    };

    function scrollDown() {
      setTimeout(function() {
        var objDiv = document.getElementById("chatbox");
            objDiv.scrollTop = objDiv.scrollHeight;
      }, 50);
    }

}
