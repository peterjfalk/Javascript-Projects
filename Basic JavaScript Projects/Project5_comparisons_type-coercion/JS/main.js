function BRL(){                     //Defining the breakline function
    document.write("<br>");         //Function code. Makes a break line at execution
};
document.write(typeof "15");
BRL();
document.write(5 + "15");
BRL();
document.write(0/0);
BRL();
document.write(isNaN('This is not a test'));
BRL();
document.write(isNaN('32352'));
function infinity() {
    document.getElementById("infinity").innerHTML = 2E310;
};
function altInfinity() {
    document.getElementById("altInfinity").innerHTML = -2E310;
};