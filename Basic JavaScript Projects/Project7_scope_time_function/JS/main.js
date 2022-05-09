var X = 100;                    //Global variable declaration
function additionOne() {        //Function declaration
    var Y = 37;                 //Local variable declaration
    document.write(X + 115 - Y + "<br>");   //Math operation using the local and global variables
}

function additionTwo() {        //Function declaration
    console.log(Y + 43);        //Math function using the local variable from a different function without defining it here
}

additionOne();
additionTwo();

function getDate() {    //Function declaration
    if (new Date().getHours() < 12) {   //If statement to see if the time is before noon
        document.getElementById("time").innerHTML = "Hello there!"
    }
    else { //Else statement for if it is after noon
        document.getElementById("time").innerHTML = "Come back before noon to get the message!"
    }
}

function data_1() { //Function declaration
    var Age = document.getElementById("data_1Input").value; //Defining the value of "Age" as the value of an input
    if (Age >= 18) {
        Answer = "Welcome to our service! Your age has been recorded in our records!"; //If comparison to see if the age is 18 or older
    }
    else { //Else response for when the age is under 18
        Answer = "Welcome to our service! You appear to be under the age of a legal adult. Please make sure you have parental guiding while signing up for our services!"
    }
    document.getElementById("howOldAreYou").innerHTML = Answer //Put answer in HTML
}

function timeFunction() {   //Function declaration
    var Time = new Date().getHours(); //Time variable delcared as current system time
    var Reply;  //Reply variable created
    if (Time < 12 == Time > 0) {    //If statement to check if the time is after midnight, but before noon
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //Else if statement to check if the time is between noon and 6 pm
        Reply = "It is afternoon.";
    }
    else { //Else statement for all other time (6 to midnight)
        Reply = "It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = Reply;
}