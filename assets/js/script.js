function RestOfDivision() {
    var firstNumber = document.getElementById('firstNumber').value; //type string
    var secondNumber = document.getElementById('secondNumber').value; // type string
      //isNan(parameter) is Not a Number
      // ! NOT

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        var remainder = firstNumber % secondNumber;
        alert("le reste de la division :" + remainder);
        }
    else {
        alert("Donner moi des nombre, svp ! ")
    }


}
