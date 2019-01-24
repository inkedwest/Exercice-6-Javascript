function number() {

  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
//isNaN pour vérifier s'il ne s'agit pas d'un nombre.
//!isNaN = false isNaN = true
  if(isNaN(firstNumber) == false && !isNaN(secondNumber)){
    if(secondNumber != 0){
// != Différent
      var result = firstNumber % secondNumber;
// % modulo
      alert(result);
    }else{
      alert('Mettre un chiffre différent à 0 svp.');
    }
  }
  else{
    alert('Mettre un chiffre à partir de 1 svp.');
  }
}
