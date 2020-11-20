
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let number = document.querySelectorAll('.numberspad div');
let operator  = document.querySelectorAll('.operators div');
let result = false;

clear.addEventListener("click", function() {
    display.innerHTML = "0";
})

// for numbers
number.forEach(element => {    
    element.addEventListener("click", function(e){

        display.innerHTML += e.target.innerHTML;

    } )
});

// for operators
operator.forEach(element => {    
    element.addEventListener("click", function(e){

        display.innerHTML += e.target.innerHTML;

    } )
});
