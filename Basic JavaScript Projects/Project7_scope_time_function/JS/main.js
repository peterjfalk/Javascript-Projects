var X = 100;
function additionOne() {
    var Y = 37;
    document.write(X + 115 - Y + "<br>");
}

function additionTwo() {
    console.log(Y + 43);
}

additionOne();
additionTwo();

function getDate() {
    if (new Date().getHours() < 12) {
        document.getElementById("time").innerHTML = "Hello there!"
    }
    else {
        document.getElementById("time").innerHTML = "Come back before noon to get the message!"
    }
}

function data_1() {
    var Age = document.getElementById("data_1Input").value;
    if (Age >= 18) {
        Answer = "Welcome to our service! Your age has been recorded in our records!";
    }
    else {
        Answer = "Welcome to our service! You appear to be under the age of a legal adult. Please make sure you have parental guiding while signing up for our services!"
    }
    document.getElementById("howOldAreYou").innerHTML = Answer
}

function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = Reply;
}