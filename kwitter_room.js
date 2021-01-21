
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCE-6o2DCPziP19nvbTp6GEZqeL8SJrwCQ",
  authDomain: "social-bird-58946.firebaseapp.com",
  databaseURL: "https://social-bird-58946-default-rtdb.firebaseio.com",
  projectId: "social-bird-58946",
  storageBucket: "social-bird-58946.appspot.com",
  messagingSenderId: "194362771260",
  appId: "1:194362771260:web:e9146c2abead899bddc039"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose:"add the room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="Kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room name is: "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{ console.log(name);
  localStorage.setItem("room_name", name); 
  window.location = "kwitter_page.html"; 
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}
