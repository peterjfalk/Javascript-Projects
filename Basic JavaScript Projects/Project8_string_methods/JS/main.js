function fullSentence() {
    var part1 = "This is "
    var part2 = "the end result "
    var part3 = "of concatting "
    var part4 = "a whole sentence togeter."
    var allTogether = part1.concat(part2, part3, part4);
    document.getElementById("test").innerHTML = allTogether;
    var section = allTogether.slice(8, 15);
    document.getElementById("test2").innerHTML = section
}

function stringMethod() {
    var X = 78;
    document.getElementById("numbersToString").innerHTML = X.toString();
}

function precisionMethod() {
    var X = 12634.46452523;
    document.getElementById("precisionMethod").innerHTML = X.toPrecision(8);
}