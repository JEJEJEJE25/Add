function calculate() {
 const number1 = parseFloat(document.getElementById('number1').value);
 const number2 = parseFloat(document.getElementById('number2').value);
 const operation = document.getElementById('operations').value;

 let result;

 switch (operation) {
    case 'add':
      result = number1 + number2;
      break;
    case 'subtract':
      result = number1 - number2;
      break;
    case 'multiply':
      result = number1 * number2;
      break;
    case 'divide':
      if (number2 === 0) {
        alert('Error: Division by zero is not allowed.');
        return;
      }
      result = number1 / number2;
      break;
 }

 document.getElementById('result').textContent = 'Result: ' + result;
}
