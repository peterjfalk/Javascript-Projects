function tradeCompany(Company, Goal, Loot) {    //Function definition
    this.companyName = Company;                 //.this call
    this.companyGoal = Goal;
    this.companyLoot = Loot;
}

//Variable set
var goldHoarder = new tradeCompany("Gold Hoarders", "finding lost treasure and gold", "chests, gems, and orante curios");
var soulsOrder = new tradeCompany("Order of Souls", "bring in the souls of the enemy", "skulls");
var merchantGuild = new tradeCompany("Merchant Alliance", "trade goods across the seas", "commodities, livestock, and rare goods");
var reapersGuild = new tradeCompany("Reapers Bones", "true piracy", "anything and everything");

//Function for calling trade company class
function newAndThis() {
    document.getElementById("newAndThis").innerHTML = "Lately Kasar has been with the " + goldHoarder.companyName + " in an attempt to acrew as many " + goldHoarder.companyLoot + " as he can. He has enjoyed " + goldHoarder.companyGoal + " as he can to become the richest pirate on the seas."
}

//Ride height check function
function rideFunction() {
    var Height, canRide; //Height variable definition
    Height = document.getElementById("Height").value; //Check height value from HTML input
    canRide = (Height < 52) ? "You are too short":"You are tall enough"; //Height comparison
    document.getElementById("Ride").innerHTML = canRide + " to ride."; //Export result
}

//Nested function
function nestedFunction() { //Inital function
    document.getElementById("countingFunction").innerHTML = Count(); //Counting call
    function Count() { //Counting function definition
        var startingPoint = 9; //Variable definition
        function plusOne() {startingPoint += 1;} //Variable addition function added
        plusOne(); //Addition function call
        return startingPoint; //Export result
    }
}