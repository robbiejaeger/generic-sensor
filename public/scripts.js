(() => {
  const initSensors = () => {
    const accelSensor = new Accelerometer();
    accelSensor.onreading = updateAccelerationValues;
    accelSensor.onerror = displayError;
    accelSensor.start();
  };

  const updateAccelerationValues = () => {
    console.log(x, y, z)
    console.log('Accelerometer reading.');
  };

  const handleError = event => {
    if (event.error.name === 'NotReadableError') {
      displayError();
    }
  };

  const displayError = () => {
    console.log('Accelerometer is not available.');
  };

  const displayValues = (x, y, z) => {
    
  };

  // Testing updating accel values - not needed later
  const generateRandomNumbers = () => {
    console.log(1);
    return Math.random();
  };

  setInterval(generateRandomNumbers, 500);
  initSensors();
})();