var firstInputField = document.getElementById("inputFieldOne");
var secondInputField = document.getElementById("inputFieldTwo");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function (event) {
  if (!firstInputField || !secondInputField) {
    alert("Please fill out all the Input Fields!");
  } else {
    var firstValue = parseFloat(firstInputField.value);
    var secondValue = parseFloat(secondInputField.value);

    var result = firstValue / secondValue;
    var percent = result * 100;

    resultField.innerText = `Result: ${percent}%`;
    event.preventDefault();
  }
});
