document.getElementById("convert-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("number").value;
  const outputElement = document.getElementById("output");

  if (inputNumber === "") {
    outputElement.innerText = "Please enter a valid number";
  } else if (inputNumber == -1) {
    outputElement.innerText =
      "Please enter a number greater than or equal to 1";
  } else if (inputNumber >= 4000) {
    outputElement.innerText =
      "Please enter a number less than or equal to 3999";
  } else {
    outputElement.innerText = convertToRoman(inputNumber);
  }
});

function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }
  return result;
}
