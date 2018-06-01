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
    if (x >= 0) {
      xValueDisplay.innerText = '+' + x.toFixed(3);
    } else {
      xValueDisplay.innerText = x.toFixed(3);
    }
    if (y >= 0) {
      yValueDisplay.innerText = '+' + y.toFixed(3);
    } else {
      yValueDisplay.innerText = y.toFixed(3);
    }
    if (z >= 0) {
      zValueDisplay.innerText = '+' + z.toFixed(3);
    } else {
      zValueDisplay.innerText = z.toFixed(3);
    }
  };

  // --------- Testing updating accel values - not needed later
  const generateRandomNumbers = () => {
    const x = Math.random() - 0.5;
    const y = Math.random() - 0.5;
    const z = Math.random() - 0.5;
    displayValues(x, y, z);
  };
  setInterval(generateRandomNumbers, 500);
  // --------- Testing updating accel values - not needed later

  initSensors();
})();