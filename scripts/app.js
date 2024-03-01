//Pseudo Code
// --Shopping List--
// We will need 10  buttons of numbers 0-9 
//We will also need the buttons for operators + - / *
//we will need a clear button AND a equals button
// we will need a display area 
//Perhaps we need a backspace button for deleting single characters without starting over
//---------
// Possible Features
//A negative key for toggling a number between negative and positive
//Possibly making th ability to type out our numbers rather than use the keys
//----------
// --The Process--
//First Number: We press number keys to build our first number, be it one or several digits
//Select an operator, telling us what kind of math we will be doing before selecting our second number
//Second Number: We press number keys to build our first number, be it one or several digits
//Typically , this is the point where we would click the equals button to complete our math
// --however, if we want to chian more mathematics together with more operators, clicking an operator should complete the math equation we set, and then carry the results over as the first number for a new equation
// -- also, if you hit equals, it will complete the equation, but THEN we can hit another operator in order to use the result as the first number of a new equation
//After an equation has happened, hitting a number key clears out the previous equation and starts building a new first number for a new equation
//the clear button can be pressed at any time to clear out the previous math and clear the display, starting us back at building a new first number
//This application should LOOK like a calculator layout this means a display on top and a square grid of keys down below
//Pressing 'Enter' on your keyboard should fire off the equals button

//linking all the buttons to the html and creating variable


let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMultiply = document.getElementById("btnMultiply");
let btnDivide = document.getElementById("btnDivide");
let btnEquals = document.getElementById("btnEquals");
let btnClear = document.getElementById("btnClear");
let displayArea = document.getElementById("displayArea");
let btnBackspace = document.getElementById("btnBackspace");
let btnClearEntry = document.getElementById("btnClearEntry");
let btnNeg = document.getElementById("btnNeg");
let stringNumber = "";
let operatorSaved = "";
let num1 = 0;
let num2 = 0;
let result = 0;


//The following is the function that dictates the behavior of our number keys!

function numberPress(btnNum){
    // alert("You pressed the " + btnNum + " key!");
    if(result != 0){
        resetCalc();
    }
    stringNumber += btnNum;
    console.log(stringNumber);
    
    updateDisplay();
};

function opPress(op){
    // if our result is NOT 0 , we can assure we are trying to continue doing math with our current result as the first number
    if(result != 0){
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    //if we have our first number and have NOT started building our second number, change the operator
    else if(num1 != 0 && stringNumber == ""){
        operatorSaved =op;
    }
    //If we have our first number and we HAVE started building the second number, we want to "do math" and then continue with our new equation
    else if(num1 != 0 && stringNumber != ""){
        doMath();
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    //by process of elimination we know that we were just building our 1st number and need to save it to continue on to building our second number
    else{
    operatorSaved = op;
    num1 = Number(stringNumber);
    stringNumber = "";
}
updateDisplay();
    

}

//updates the display area to show the values

function updateDisplay(){
    if(operatorSaved == ""){
        displayArea.innerText = stringNumber;
    }
    else{
        displayArea.innerText = num1 + " " + operatorSaved + " " + stringNumber;
    }
}

// This function preforms math based on the clicked operator

function doMath(){
    num2 = Number(stringNumber);
    switch(operatorSaved){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "X":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;

    }
}
//This function clears the save values

function resetCalc(){
    stringNumber = "";
    operatorSaved = "";
    num1 = 0;
    num2 = 0;
    result = 0;
    updateDisplay();
}

//This function resets the entry and not the whole calculator
function resetEntry(){
    stringNumber = "";
    updateDisplay();
}

//This function removes the last button clicked

function backspace(){

    // slice will remove the last number in the string. 0 is that start of the string and -1 is working backwards from the end of the string
    stringNumber = stringNumber.slice(0, -1);
    updateDisplay();
}
//this function changes the number to negative or vice versa

function flip(){
    let num3 = 0;
    let numNeg = 0;
    num3 = Number(stringNumber);
    negNum = num3 * -1;
    stringNumber = negNum.toString();
    updateDisplay();
}


//Operator Events
btnPlus.addEventListener("click", function(){
    opPress("+");
});
btnMinus.addEventListener("click", function(){
    opPress("-");
});
btnMultiply.addEventListener("click", function(){
    opPress("X");
});
btnDivide.addEventListener("click", function(){
    opPress("÷");
});
btnEquals.addEventListener("click", function(){
    doMath();

    // found that after equaling pressing a new number will add the the string number 12 - 12 = 0 then pressing 3 would become 12 - 123

    displayArea.innerText = result;
    stringNumber = "";
    operatorSaved = "";
    num1 = 0;
    num2 = 0;
});

//Number Events

btn0.addEventListener("click", function(){
    numberPress("0");
});
btn1.addEventListener("click", function(){
    numberPress("1");
});
btn2.addEventListener("click", function(){
    numberPress("2");
});
btn3.addEventListener("click", function(){
    numberPress("3");
});
btn4.addEventListener("click", function(){
    numberPress("4");
});
btn5.addEventListener("click", function(){
    numberPress("5");
});
btn6.addEventListener("click", function(){
    numberPress("6");
});
btn7.addEventListener("click", function(){
    numberPress("7");
});
btn8.addEventListener("click", function(){
    numberPress("8");
});
btn9.addEventListener("click", function(){
    numberPress("9");
});
btnClear.addEventListener("click", function(){
    resetCalc();
})
btnClearEntry.addEventListener("click", function(){
    resetEntry();
})
btnBackspace.addEventListener("click", function(){
    backspace();
})
btnNeg.addEventListener("click", function(){
    flip();
})