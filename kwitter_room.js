//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAHsxpBVzG3j65GbBzlYQ5atNdhEmUbEZQ",
      authDomain: "kwitter-28075.firebaseapp.com",
      databaseURL: "https://kwitter-28075-default-rtdb.firebaseio.com",
      projectId: "kwitter-28075",
      storageBucket: "kwitter-28075.appspot.com",
      messagingSenderId: "615414386858",
      appId: "1:615414386858:web:655f6fd48d4c7686dcc0d3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
