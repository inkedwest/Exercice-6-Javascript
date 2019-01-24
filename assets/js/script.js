function number() {
    var firstNumber = document.getElementById('firstNumber').value; //type string
    var secondNumber = document.getElementById('secondNumber').value; // type string
      // isNaN(parameter) = is Not a Number ; pour vérifier s'il ne sagit pas d'un nombre
      // isNaN = false
      // !isNan = true
      // ! = NOT

    if (!isNaN(firstNumber) == false && !isNaN(secondNumber)){

      if(secondNumber != 0){
// != signifie que c'est différent
        var result = firstNumber % secondNumber;
// % est le modulo
        alert(result);

        }else{

          alert('Mettre un chiffre différent de 0 svp.');

        }
      }
    else {
        alert('Mettre un chiffre à partir de 1 svp.');
    }

}


// == égalité
// > supérieur
// > inférieur
// >= supérieur ou égal
// <= inférieur ou égal
// != différent
