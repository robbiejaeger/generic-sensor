(() => {
  const initSensors = () => {
    const accelSensor = new Accelerometer();
    accelSensor.onreading = updateAccelerationValues;
    accelSensor.onerror = displayError;
    accelSensor.start();
  };

  const updateAccelerationValues = () => {
    console.log(x, y, z)
    console.log('Sensor reading.');
  };

  const displayError = event => {
    if (event.error.name === 'NotReadableError') {
      console.log('Sensor is not available.');
    }
  };

  initSensors();
})();