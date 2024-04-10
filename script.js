
function display(value){
  document.getElementById("result").value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

function deleteRightDigit() {
  const resultElement = document.getElementById("result");
  let currentValue = resultElement.value;

  
  if (currentValue.length === 0 || currentValue.length === 1) {
    return; // Do nothing if there's no digit to delete
  }

 
  const newValue = currentValue.slice(0, -1);
  resultElement.value = newValue;

}




