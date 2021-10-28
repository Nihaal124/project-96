
var firebaseConfig = {
  apiKey: "AIzaSyAAbmZt4gtQNoM-ctzj39NcxjPtSZwKRxM",
  authDomain: "ken-wpvc.firebaseapp.com",
  databaseURL: "https://ken-wpvc-default-rtdb.firebaseio.com",
  projectId: "ken-wpvc",
  storageBucket: "ken-wpvc.appspot.com",
  messagingSenderId: "64221262905",
  appId: "1:64221262905:web:b57b3769d7fb95341989e8",
  measurementId: "G-S1MXQHCZLB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
                  });
       localStorage.setItem("room_name", room_name);
       window.location="kwitter_page.html";
              }
         function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("room name -" + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
  
  });});}
getData();
function redirectToRoomName(name){
  console.log=(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}