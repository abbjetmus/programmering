// Your web app's Firebase configuration

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

function turnOnOffLight() {
  let myCheckBox = document.getElementById("checkbox");

  if (myCheckBox.checked) {
    document.getElementById("myImage").src = "light-bulb-on.png";
    ledRef.update({ led: true });
  } else {
    document.getElementById("myImage").src = "light-bulb-off.png";
    // database.ref("/led").update({ led: true });
    ledRef.update({ led: false });
  }
}
