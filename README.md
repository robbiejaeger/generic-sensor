# Generic Sensor API Demo

This is a demonstration of the [Generic Sensor API](https://www.w3.org/TR/generic-sensor/). This specific example 
uses the `Accelerometer` sensor to show the acceleration of a device in the X, Y, and Z directions.

The JavaScript code specific to the accelerometer can be found in `/public/scripts.js`, [here](https://github.com/robbiejaeger/generic-sensor/blob/master/public/scripts.js#L16-L49).

The demo will only work on devices that have accelerometers and use Chrome version 67 or higher.

## Functionality

* **Sensor Readings:** The live sensor reading is displayed in the top of the application in the X, Y, and Z directions.
* **Start/Stop Sensor:** Stop or start the sensor from reading acceleration values.
* **Max Values:** Records the maximum value of the sensor in the X, Y, and Z direction (the maximum can be a positive or negative value).
* **Reset:** Reset the maximum values recorded from the sensor in each X, Y, and Z direction.

<div align="center">
  <img 
    src="https://i.imgur.com/bt1rpQ8.png"
    alt="application screenshot"
    width="350"
    style="border:1px solid black"
  />  
</div>
