// Your web app's Firebase configuration
// https://www.survivingwithandroid.com/esp8266-firebase-realtime-database-iot-controlled-rgb-leds/

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  databaseURL: "",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

var ledRef = db.ref("led");

var counterRef = db.ref("counter");

var personRef = db.ref("person");

ledRef.once("value").then((snapshot) => {
  if (snapshot.val()) {
    let myCheckBox = document.getElementById("checkbox");
    myCheckBox.checked = snapshot.val().led;
    if (myCheckBox.checked) {
      document.getElementById("myImage").src = "light-bulb-on.png";
    } else {
      document.getElementById("myImage").src = "light-bulb-off.png";
    }
  }
});

ledRef.on("value", (snapshot) => {
  const data = snapshot.val();
});

personRef.on("value", (nalle) => {
  const data = nalle.val();
  console.log(data);
});

function turnOnOffLight() {
  let myCheckBox = document.getElementById("checkbox");

  if (myCheckBox.checked) {
    document.getElementById("myImage").src = "light-bulb-on.png";
    ledRef.update({ led: true });
    // personRef.update({ superkrafter: "Dansa Tango" });
  } else {
    document.getElementById("myImage").src = "light-bulb-off.png";
    // database.ref("/led").update({ led: true });
    ledRef.update({ led: false });
  }
}

function changeCounter() {
  var counter = document.querySelector("#counter");
  counterRef.update({ counter: counter.value });
}
