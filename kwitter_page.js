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
    room_name=localStorage.getItem("room_name");

     function send(){
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0   
       });
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button-" + message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes
      });     
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }
