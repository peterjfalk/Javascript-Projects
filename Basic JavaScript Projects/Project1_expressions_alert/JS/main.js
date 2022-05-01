function BRL(){                     //Defining the breakline function
    document.write("<br>")          //Function code. Makes a break line at execution
};
window.alert("Hello world!");       //Window alert for basic code test
document.write("Hello world!");     //Basic text writing
BRL();                              //Breakline function
var A = new String("This is a string");         //Basic variable string assignment
document.write(A.fontcolor( "blue" ));          //Variable execution with color edit
BRL();
var B = "This is another string out of sync!";  //Another string
window.alert(B);                    //Variable execution, but in the alert window
document.write(" \"Hello there!\" the general said, jumping to the ground the finesse");    //Text with special character inserts
BRL();
document.write("\"There is a saying. \'Yesterday is history, tomorrow is a mystery, but today is a gift.\'" //Text with concatenation
+ " That is why it is called the present.\""
+ " - Oogway");
BRL();
var C = "Endless" + " hope";        //Variables with concatenation
document.write(C);
BRL();
var Gameowner = "KGGKasar", Game1 = "Minecraft", Game2 = "Valheim", Game3 = "Subnautica", Game4 = "League of Legends";  //Multiple variables written at once
document.write(Game3);              //Writing one of the variables
BRL();
document.write(Game4 + " and " + Game2 + " are fun games!");    //Expression using multiple variables