"use strict"

function calculate() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    let result = document.getElementById("result");
    let inputs = document.getElementsByName("operation");

    for (let i in inputs) {
        if (inputs[i].value == "/" && inputs[i].checked && number2 == 0) {
            alert("Number cannot be divided by zero");
            result.value = "";
        }
        else if (inputs[i].checked) {
            result.value = eval(number1 + inputs[i].value + number2);
        }
    }

    displayResults();
}

function displayResults() {
    let result = document.getElementById("result").value
    let arrayResults = JSON.parse(localStorage.getItem('finalResults'));

    if (arrayResults == null) {
        arrayResults = [];
    }

    if (result !== "") {
        arrayResults.unshift(result);
    }
    arrayResults.splice(5);

    localStorage.setItem('finalResults', JSON.stringify(arrayResults));

    let list = document.getElementById("list-of-results");
    document.getElementById("list-of-results").innerHTML = '';
    for (let i = 0; i < arrayResults.length; i++) {
        let createdLi = document.createElement("li");
        createdLi.innerText = arrayResults[i];
        list.appendChild(createdLi);
    }
}

displayResults();