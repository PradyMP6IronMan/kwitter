//YOUR FIREBASE LINKS\
var room_name = localStorage.getItem("roomname");
var user_name = localStorage.getItem("username")

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


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}


function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                likes = message_data['like']
                name_html = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
                message_html = "<h5 class='message_h4' style='color: black;'>" + message + "</h5>"

                button_html = "<button class='btn btn-primary' value=" + likes + " id=" + firebase_message_id + " onclick = 'updatelike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>&nbspLike&nbsp" + likes + "</span></button><hr>"
                row = name_html + message_html + button_html;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function updatelike(message_id) {
    console.log(message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    likes = Number(likes) + 1;
    firebase.database().ref(room_name).child(message_id).update({
        like: likes

    });
}


function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");

    window.location = "final.html";
}