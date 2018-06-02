(() => {
  const xValueDisplay = document.getElementById('x-value');
  const yValueDisplay = document.getElementById('y-value');
  const zValueDisplay = document.getElementById('z-value');

  const errorDisplay = document.getElementById('error-display');

  const xMaxDisplay = document.getElementById('x-max');
  const yMaxDisplay = document.getElementById('y-max');
  const zMaxDisplay = document.getElementById('z-max');

  const maxVals = {xMax: 0, yMax: 0, zMax: 0};

  // Accelerometer API ---------------------------------------

  const accelSensor = new Accelerometer({ frequency: 12 });

  const initSensors = () => {
    accelSensor.onreading = updateAccelerationValues;
    accelSensor.onerror = displayError;
    accelSensor.start();
  };

  const updateAccelerationValues = () => {
    displayValues(accelSensor.x, accelSensor.y, accelSensor.z);
    displayMaxValues(accelSensor.x, accelSensor.y, accelSensor.z);
  };

  const handleError = event => {
    if (event.error.name === 'NotReadableError') {
      displayError();
    }
  };

  // Accelerometer API ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  const displayError = () => {
    errorDisplay.style = 'display: block;';
    errorDisplay.innerText = 'Accelerometer not available on this device.';
  };

  const displayValues = (x, y, z) => {
    xValueDisplay.innerText = formatValues(x);
    yValueDisplay.innerText = formatValues(y);
    zValueDisplay.innerText = formatValues(z);
  };

  const displayMaxValues = (x, y, z) => {
    determineMax(x, 'xMax', xMaxDisplay);
    determineMax(y, 'yMax', yMaxDisplay);
    determineMax(z, 'zMax', zMaxDisplay);
  };

  const determineMax = (val, maxVal, displayEl) => {
    if (Math.abs(val) > Math.abs(maxVals[maxVal])) {
      maxVals[maxVal] = val;
      displayEl.innerText = formatValues(val);
    }
  };

  const formatValues = val => {
    return val >= 0 ? '+' + val.toFixed(2) : val.toFixed(2);
  };

  initSensors();
})();