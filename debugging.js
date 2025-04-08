const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //Fix
    value: Number(prompt('Degree celsius:')),
  };

  //b) Find
  console.log(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//a) Identify
console.log(measureKelvin());
