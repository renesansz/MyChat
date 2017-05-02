angular.module('starter.service', []).factory('ChatMessages', ChatMessages);

function ChatMessages($firebaseArray) {

    var ref = new Firebase('https://my-simple-chat-app.firebaseIO.com');

    return $firebaseArray(ref.child('messages'));

}
