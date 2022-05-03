function BasicAddition() {                                              //Define function
    var addition = 2 + 2;                                               //Define variable
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;  //Display math operation
}

function BasicSubtraction() {                                           //Define function
    var subtraction = 7 - 4;                                            //Define variable
    document.getElementById("Math2").innerHTML = "7 - 4 = " + subtraction;  //Display math operation
}

function BasicMultiplication() {                                        //Define function
    var muliply = 88 * 5;                                               //Define variable
    document.getElementById("Math3").innerHTML = "88 * 5 = " + muliply; //Display math operation
}

function BasicDivision() {                                              //Define function
    var divide = 783 / 9;                                               //Define variable
    document.getElementById("Math4").innerHTML = "783 / 9 = " + divide; //Display math operation
}

function superMath() {                                                  //Define function
    var operator = (8 * 5) / 4 - 12 + 7 - (9 - 3);                      //Define variable
    document.getElementById("Math5").innerHTML = "(8 * 5) / 4 - 12 + 7 - (9 - 3) = " + operator;    //Display math operation
}

function remainderMath() {                                              //Define function
    var remainder = 234 % 15;                                           //Define variable
    document.getElementById("Math6").innerHTML = "The remainder of 234 divided by 15 is " + remainder;  //Display math operation
}

function increaseMath() {                                               //Define function
    var increase = 8;                                                   //Define variable
    increase++;                                                         //Increase variable number
    document.getElementById("Math7").innerHTML = "If we take 8 up by one step, we get " + increase; //Display math operation
}

function decreaseMath() {                                               //Define function
    var reduce = 6;                                                     //Define variable
    reduce--;                                                           //Reduce variable number
    document.getElementById("Math8").innerHTML = "If we take 6 down by one step, we get " + reduce; //Display math operation
}

function randomMath() {
    document.getElementById("Math9").innerHTML = Math.random() * 300
}