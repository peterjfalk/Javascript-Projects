function BasicAddition() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function BasicSubtraction() {
    var subtraction = 7 - 4;
    document.getElementById("Math2").innerHTML = "7 - 4 = " + subtraction;
}

function BasicMultiplication() {
    var muliply = 88 * 5;
    document.getElementById("Math3").innerHTML = "88 * 5 = " + muliply;
}

function BasicDivision() {
    var divide = 783 / 9;
    document.getElementById("Math4").innerHTML = "783 / 9 = " + divide;
}

function superMath() {
    var operator = (8 * 5) / 4 - 12 + 7 - (9 - 3);
    document.getElementById("Math5").innerHTML = "(8 * 5) / 4 - 12 + 7 - (9 - 3) = " + operator;
}

function remainderMath() {
    var remainder = 234 % 15;
    document.getElementById("Math6").innerHTML = "The remainder of 234 divided by 15 is " + remainder;
}

function increaseMath() {
    var increase = 8;
    increase++
    document.getElementById("Math7").innerHTML = "If we take 8 up by one step, we get " + increase;
}

function decreaseMath() {
    var reduce = 6;
    reduce--
    document.getElementById("Math8").innerHTML = "If we take 6 down by one step, we get " + reduce;
}