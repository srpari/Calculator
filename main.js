
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let lastChar = "";
let currentStr = "";
let operatorsArr = ["+","-","*","/"];
let charOperator = 0;

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(e) {
  const clickedButtonValue = e.target.value;
  currentStr = clickedButtonValue;
  lastChar = currentStr.slice(-1);  
  if(operatorsArr.includes(lastChar)) 
  {
    charOperator++;
    if (charOperator==1) {                
        if (clickedButtonValue === '=') {
            if (display.value !== '') {
                //JavaScript evaluates arithmetic expressions automatically 
               var validCode = 1;
                try {
                    display.value = eval(display.value);       /* Code test */
                } catch (e) {
                if (e instanceof SyntaxError) {
                    validCode = 0;
                    console.warn(e.message);
                    alert("Pls enter the number");
                }
                } 
            }
        } else if (clickedButtonValue === 'C') {
            display.value = '';
        } else {   
               
            display.value += clickedButtonValue;
        }
    }
  }else {
    charOperator=0;
        if (clickedButtonValue === '=') {
            if (display.value !== '') {
                //JavaScript evaluates arithmetic expressions automatically 
                var validCode = 1;
                try {
                    display.value = eval(display.value);       /* Code test */
                } catch (e) {
                if (e instanceof SyntaxError) {
                    validCode = 0;
                    console.warn(e.message);
                    alert("Pls enter the number");
                }
                } 
            }
        } else if (clickedButtonValue === 'C') {
            display.value = '';
        } else {      
            display.value += clickedButtonValue;
        }
}

}