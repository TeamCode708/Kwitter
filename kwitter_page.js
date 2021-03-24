//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}