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

function addUser() {
    var username = document.getElementById("getUserName").value;

    firebase.database().ref("/").child(username).update({
        purpose: "adding user name"
    });

    localStorage.setItem("username", username);
}