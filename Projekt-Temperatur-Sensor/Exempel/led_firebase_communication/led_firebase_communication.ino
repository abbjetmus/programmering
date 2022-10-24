#include "FirebaseESP8266.h"
#include <ESP8266WiFi.h>
#define FIREBASE_HOST "https://temp-projekt-220s-default-rtdb.europe-west1.firebasedatabase.app"
#define FIREBASE_AUTH "QzDl5QOyBN7fY3nyBucX83ihF8zLByG1bD4MlCGt"
#define WIFI_SSID "TeliaGateway58-98-35-7D-3B-D5"
#define WIFI_PASSWORD "32643422E2"
//Define Firebase Data objects
FirebaseData firebaseData1;

void setup() {
  Serial.begin(115200);
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
}

void loop() {
  // put your main code here, to run repeatedly:

  if (Firebase.getBool(firebaseData1, "/led/led")) {
      if (firebaseData1.dataType() == "boolean")
      {         
          Serial.println(firebaseData1.boolData());
          digitalWrite(LED_BUILTIN, firebaseData1.boolData());
      }
  }

  if (Firebase.getInt(firebaseData1, "/counter")) {
   if  (firebaseData1.dataType() == "int") {
      int val = firebaseData1.intData();
      Serial.println(val);
      delay(3000);
      Firebase.setInt(firebaseData1, "/counter", 30);
    }
  }
}
