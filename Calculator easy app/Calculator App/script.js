let display = document.querySelector('.display');
let num1Msg = '1';
let num2Msg = '2';
let num3Msg = '3';
let num4Msg = '4';
let num5Msg = '5';
let num6Msg = '6';
let num7Msg = '7';
let num8Msg = '8';
let num9Msg = '9';
let num0Msg = '0';
let num00Msg = '00';
let numdMsg = '.';
let numsMsg = '/';
let numtMsg = '*';
let nummMsg = '-';
let numpMsg = '+';

function btnClick(Msg) {
  
    display.value += Msg;
}
function clearBtn() {
display.value = ''
}
function deleteBtn() {
 display.value = display.value.toString().slice(0,-1);
}
function equalBtn() {
    display.value = eval(display.value);
}