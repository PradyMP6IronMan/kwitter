//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD9dYinBayLo7jg6hWGS_umlXlDDKXCZyc",
    authDomain: "kwitter-f95e0.firebaseapp.com",
    databaseURL: "https://kwitter-f95e0.firebaseio.com",
    projectId: "kwitter-f95e0",
    storageBucket: "kwitter-f95e0.appspot.com",
    messagingSenderId: "1063186833807",
    appId: "1:1063186833807:web:22506fba019c898981abfa",
    measurementId: "G-BYC740CNC3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome, " + username + "!";

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log(Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoRoomName(this.id)'>#" + Room_names + "</div><hr> ";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");

    window.location = "final.html";
}

function addRoom() {
    var roomname = document.getElementById("getroomname").value;

    firebase.database().ref("/").child(roomname).update({
        purpose: "adding room name"
    });

    localStorage.setItem("roomname", roomname);
    window.location = "kwitter_page.html";
}

function redirecttoRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}