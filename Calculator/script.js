const num1=document.getElementById('num1');
const num2 = document.getElementById('num2');
const add= document.getElementById('add');
const sub=document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const result = document.getElementById('result');

function addFun()
{
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    if(isNaN(number1) || isNaN(number2))
    {
        result.innerText = "Please Enter Valid a Number";
    }
    else
    {
        let sum = number1 + number2;
        result.innerText = `Result : ${sum}`;
    }
}
add.onclick = addFun;

function subFun()
{
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    if(isNaN(number1) || isNaN(number2))
    {
        result.innerText = "Please Enter a Number";
    }
    else
    {
        let sum = number1 - number2;
        result.innerText = `Result : ${sum}`;
    }
}
sub.onclick = subFun;

function mulFun()
{
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    if(isNaN(number1) || isNaN(number2))
    {
        result.innerText = "Please Enter a Number";
    }
    else
    {
        let sum = number1 * number2;
        result.innerText = `Result : ${sum}`;
    }
}
mul.onclick = mulFun;

function divFun()
{
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    if(isNaN(number1) || isNaN(number2))
    {
        result.innerText = "Please Enter a Number";
        return;
    }
    if (number2 === 0)
    {
        result.innerText = "Cannot be divied by Zero";
        return;
    }
    
        let sum = number1 / number2;
        result.innerText = `Result : ${sum}`;
    
}
div.onclick = divFun;