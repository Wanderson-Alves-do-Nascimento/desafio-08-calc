
function calc(){
  const sum= (firstNumber, secondNumber) => firstNumber + secondNumber;
  const sub = (firstNumber, secondNumber) => firstNumber - secondNumber;
  const multi = (firstNumber, secondNumber) => firstNumber * secondNumber;
  const div = (firstNumber, secondNumber) => (firstNumber /secondNumber).toFixed(2);
  
  let firstNumb = Number(prompt("Informe o 1º número:"));
  let secondNumb = Number(prompt("Informe o 2º número:"));
  
  alert(`A soma de ${firstNumb} e ${secondNumb} é ${sum(firstNumb, secondNumb)}.`);
  alert(`A subtração de ${firstNumb} e ${secondNumb} é ${sub(firstNumb, secondNumb)}.`);
  alert(`A multiplicação de ${firstNumb} por ${secondNumb} é ${multi(firstNumb, secondNumb)}.`);
  alert(`A divisão de ${firstNumb} por ${secondNumb} é ${div(firstNumb, secondNumb)}.`);
  
  if(sum(firstNumb, secondNumb) % 2 == 0){
    alert("A soma dos números é par.");
  }
  if(firstNumb == secondNumb){
    alert("Os números inseridos são iguais.");
  }
}