(() => {
  const xValueDisplay = document.getElementById('x-value');
  const yValueDisplay = document.getElementById('y-value');
  const zValueDisplay = document.getElementById('z-value');

  const xMaxDisplay = document.getElementById('x-max');
  const yMaxDisplay = document.getElementById('y-max');
  const zMaxDisplay = document.getElementById('z-max');

  xMax = 0;
  yMax = 0;
  zMax = 0;

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
    displayMaxValues(x, y, z);
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
    xValueDisplay.innerText = formatValues(x);
    yValueDisplay.innerText = formatValues(y);
    zValueDisplay.innerText = formatValues(z);
  };

  const displayMaxValues = (x, y, z) => {
    xMax = findMax(x, xMax);
    xMaxDisplay.innerText = formatValues(xMax);

    yMax = findMax(y, yMax);
    yMaxDisplay.innerText = formatValues(yMax);

    zMax = findMax(z, zMax);
    zMaxDisplay.innerText = formatValues(zMax);
  };

  const findMax = (val, maxVal) => {
    if (Math.abs(val) > Math.abs(maxVal)) {
      return val;
    } else {
      return maxVal;
    }
  };

  const formatValues = val => {
    return val >= 0 ? '+' + val.toFixed(3) : val.toFixed(3);
  };

  // --------- Testing updating accel values - not needed later
  const generateRandomNumbers = () => {
    const x = Math.random() - 0.5;
    const y = Math.random() - 0.5;
    const z = Math.random() - 0.5;
    displayValues(x, y, z);
    displayMaxValues(x, y, z);
  };
  setInterval(generateRandomNumbers, 500);
  // --------- Testing updating accel values - not needed later

  initSensors();
})();