function BRL(){                     //Defining the breakline function
    document.write("<br>");         //Function code. Makes a break line at execution
};

document.write(typeof "15");        //Type of to see what type of data something
BRL();
document.write(5 + "15");           //Type coercion
BRL();
document.write(0/0);                //NaN comparison
BRL();
document.write(isNaN('This is not a test'));    //NaN test
BRL();
document.write(isNaN('32352'));     //NaN test
function infinity() {
    document.getElementById("infinity").innerHTML = 2E310; //Posititive infinity test
};
function altInfinity() {
    document.getElementById("altInfinity").innerHTML = -2E310; //Negative infinity test
};
//Comparison section
BRL();
document.write(7 < 6);
BRL();
document.write(192 > 102);
console.log(623 - 122);
BRL();
document.write((142 * 6) == (71 * 12));
BRL();
document.write(10 == 2);
var A = 10, B = 10, C = 90, D = "10", F = "Blue"
BRL();
document.write(A === B);
BRL();
document.write(A === F);
BRL();
document.write(A === D);
BRL();
document.write(A === C);
BRL();
document.write(5 > 4 && 17 > 6);
BRL();
document.write(5 > 4 && 17 > 31);
BRL();
document.write(51 < 16 || 71 > 15);
BRL();
document.write(51 < 1 || 100 < 45)
BRL();
document.write(!(5 < 15));
BRL();
document.write(!(30 < 3));