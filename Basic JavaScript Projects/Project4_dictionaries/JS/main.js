function my_Dictionary() {                  //Function calling
    var Games = {                           //Define variable as a dictionary
        Name:"Minecraft",                   //Dictionary listings
        Publisher:"Microsoft and Mojang",
        Genre:"Survival",
        Popularity:"High"
    };
    delete Games.Genre                      //Delete dictionary listing
    document.getElementById("Dictionary").innerHTML = Games.Genre   //Output a dictionary listing. Since it is deleted, it returns as undefined.
}