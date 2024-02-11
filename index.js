

const submitButton = document.querySelector('#btn');
const resetButton = document.querySelector('#btn1');
const inputs = document.querySelectorAll('input');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

const resultValue = document.querySelector('#resultValue');
const descTest = document.querySelector('#desc');


submitButton.addEventListener('click', () =>{
    const valueOne = +num1.value/100*num1.value/100;
    const valueTwo = +num2.value;
    const result = valueTwo / valueOne;
    console.log(result);
    resultValue.innerHTML = result;
    const desc = interpretBMI(result);
    document.querySelector('#resultValue').innerHTML = result.toFixed(2);
    descTest.innerHTML = `You are <strong>${desc}</strong>`;
    
});

resetButton.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '')
});


function interpretBMI(result){
    if (result<18.5) {
        return 'Underweight';
    } else if (result<25) {
        return 'Healthy'; 
    } else if (result<30) {
        return 'Overweight';
    } else{
        return 'Obese';
    }
}



