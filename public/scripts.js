(() => {
  const xValueDisplay = document.getElementById('x-value');
  const yValueDisplay = document.getElementById('y-value');
  const zValueDisplay = document.getElementById('z-value');

  const initSensors = () => {
    const accelSensor = new Accelerometer();
    accelSensor.onreading = updateAccelerationValues;
    accelSensor.onerror = displayError;
    accelSensor.start();
  };

  const updateAccelerationValues = () => {
    console.log('Accelerometer reading.');
    console.log(x, y, z);
    displayValues(x, y, z);
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
    xValueDisplay.innerText = x.toFixed(3);
    yValueDisplay.innerText = y.toFixed(3);
    zValueDisplay.innerText = z.toFixed(3);
  };

  // Testing updating accel values - not needed later
  const generateRandomNumbers = () => {
    const x = Math.random();
    displayValues(x, x, x);
  };
  setInterval(generateRandomNumbers, 500);
  //  Testing updating accel values - not needed later

  initSensors();
})();