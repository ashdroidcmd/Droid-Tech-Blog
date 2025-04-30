import React from "react";
import { addProject } from "../utils/addProject"; // adjust path

const AddExample = () => {
  const handleAdd = () => {
    const project = {
      "id": "6",
      "title": "Project #6 Ultrasonic Distance Sensor",
      "slug": "ultrasonic-distance-sensor",
      "date": "February March 8, 2025 by Ash",
      "video": "https://www.youtube.com/watch?v=-_gYWeo8WIU",
      "image": [
        "4trafficlight.jpg",
        "4circuit.png"
      ],
      "content": "The Ultrasonic Distance Sensor (usually the HC-SR04) is a great project that teaches you how to measure distance using sound waves.",
      "components": [
        "Arduino board (Uno, Mega, etc.)",
        "HC-SR04 Ultrasonic Sensor",
        "Jumper wires",
        "Breadboard"
      ],
      "diagram": {
        "Ultrasonic Distance Sensor": [
          "VCC → 5V",
          "GND → GND",
          "TRIG → Pin 9",
          "ECHO → Pin 8"
        ]
      },
      "code": "\nconst int trigPin = 9;\nconst int echoPin = 8;\nlong duration;\nint distance;\n\nvoid setup() {  \n   pinMode(trigPin, OUTPUT);  \n   pinMode(echoPin, INPUT);  \n   Serial.begin(9600);\n}\n\nvoid loop() {  \n   // Send a 10us HIGH pulse to trigger the sensor  \n   digitalWrite(trigPin, LOW);  \n   delayMicroseconds(2);  \n   digitalWrite(trigPin, HIGH);  \n   delayMicroseconds(10);  \n   digitalWrite(trigPin, LOW);  \n\n   // Measure the echo time  \n   duration = pulseIn(echoPin, HIGH);  \n\n   // Convert duration to distance (in cm)  \n   distance = duration * 0.034 / 2;  \n\n   Serial.print(distance);  \n\ndelay(100);\n}",
      "explanation": [
        "This sends a 10 microsecond pulse to trigger the ultrasonic sensor",
        "pulseIn() measures how long the echo pin stays HIGH (in microseconds)",
        "This is the time it took for the sound to go to the object and return",
        "Sound speed = 0.034 cm/μs",
        "Divide by 2 because the pulse travels to the object and back",
        "Displays the distance in centimeters on the Serial Monitor"
      ]
    };

    addProject(project);
  };

  return (
    <div className="p-4">
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        ➕ Add Example Project
      </button>
    </div>
  );
};

export default AddExample;
