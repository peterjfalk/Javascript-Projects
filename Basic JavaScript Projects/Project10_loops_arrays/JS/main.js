function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Piano", "Hurdy Gurdy", "Trombone", "Saxophone"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function arrayFunction() {
    var Array = [];
    Array[0] = "Strength"
    Array[1] = "Flashfire"
    Array[2] = "Sonic Manipulation"
    Array[3] = "Flexibility"
    Array[4] = "Speed"
    Array[5] = "Earth manipulation"
    document.getElementById("Array").innerHTML = "A nice power to have would be " + Array[2] + "."
}

function constantFunction() {
    const videoGame = {genre:"Horror", publisher:"Unknown Worlds", title:"Subnautica"};
    videoGame.genre = "Survival";
    videoGame.release = "2018"
    document.getElementById("Constant").innerHTML = "A very good video game to play is " + videoGame.title + ", which was released in " + videoGame.release + " and is a " + videoGame.genre + " game."
}

document.write("<br>")

var Z = 19
document.write(Z)
document.write("<br>")
{
    let Z = 10
    document.write(Z)
}
document.write("<br>")

let game = {
    genre : "survival",
    developer : "Coffe Stain Publishing",
    title : "Valheim",
    release : "2021",
    description : function() {
        return "This game, " + this.title + ", is a " + this.genre + " made by " + this.developer + " in " + this.release + ".";
    }
};
document.getElementById("gameObject").innerHTML = game.description();