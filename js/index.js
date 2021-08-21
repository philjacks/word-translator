// ELEMENT SELECTORS
const form = document.getElementById("converter");
const convertIcon = document.getElementById("convert-symbol");
const error = document.getElementById("error-div");
const refresh = document.getElementById('refresh')

// 'FROM' ELEMENTS
const inSelect = document.getElementById("from-select");
const input = document.getElementById("from-unit");

// 'TO' ELEMENTS
const outSelect = document.getElementById("to-select");
const output = document.getElementById("to-unit");

outSelect.value = `out-fahrenheit`

// CONVERSION FUNCTIONS
const celsiusToFahrenheit = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal * 1.8 + 32;
  output.style.color = `black`

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const celsiusToKelvin = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal + 273.15;
  output.style.color = `black`

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const fahrenheitToCelsius = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal - 32 / 1.8;
  output.style.color = `black`

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const fahrenheitToKelvin = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = (numVal - 32) / 1.8 + 273.15;
  output.style.color = `black`

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const kelvinToCelsius = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = numVal - 273.15;
  output.style.color = `black`

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};
const kelvinToFahrenheit = (numVal) => {
  numVal = parseFloat(numVal);
  output.innerHTML = (numVal - 273.15) * 1.8 + 32;
  output.style.color = `black`

  if (isNaN(numVal)) {
    output.innerHTML = `Not a number`;
    showError(`Only numbers can be converted`);
    setTimeout(removeError, 3000);
  }
};

// CHECK SELECT VALUES AND RUN DESIRED FORMULA
const runConversion = () => {
  if (inSelect.value === `in-celsius` && outSelect.value === `out-fahrenheit`) {
    celsiusToFahrenheit(input.value);
  } else if (
    inSelect.value === `in-celsius` &&
    outSelect.value === `out-kelvin`
  ) {
    celsiusToKelvin(input.value);
  } else if (
    inSelect.value === `in-fahrenheit` &&
    outSelect.value === `out-celsius`
  ) {
    fahrenheitToCelsius(input.value);
  } else if (
    inSelect.value === `in-fahrenheit` &&
    outSelect.value === `out-kelvin`
  ) {
    fahrenheitToKelvin(input.value);
  } else if (
    inSelect.value === `in-kelvin` &&
    outSelect.value === `out-celsius`
  ) {
    kelvinToCelsius(input.value);
  } else if (
    inSelect.value === `in-kelvin` &&
    outSelect.value === `out-fahrenheit`
  ) {
    kelvinToFahrenheit(input.value);
  } else {
    output.innerHTML = `Check units`;
    showError(`Please check your units`);
    setTimeout(removeError, 3000);
  }
};

const showError = (message) => {
  error.innerHTML = message;
  error.style.display = `block`
};
const removeError = () => {
  error.style.display = `none`
  error.innerHTML = ``;


};

// 'CONVERT' BUTTON LISTENER
form.addEventListener("submit", (e) => {
  setTimeout(runConversion, 1000);

  convertIcon.classList.add("rotate");
  const removeRotateClass = () => {
    convertIcon.classList.remove("rotate");
  };
  setTimeout(removeRotateClass, 1000);

  e.preventDefault();
});

// REFRESH
refresh.addEventListener('click', () => {
  input.value = ``
  output.innerHTML = `Result displays here`
  output.style.color = `grey`
  inSelect.value = `in-celsius`
  outSelect.value = `out-fahrenheit`

})