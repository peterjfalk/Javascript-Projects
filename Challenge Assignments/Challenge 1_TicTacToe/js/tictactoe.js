//Global variable and array definitions
let activePlayer = 'X';
let selectedSquares = [];

//Function to place down an x if it is the player turn, or an O if it is the AI turn
function placeXOrO(squareNumber) {
    //Sets the selected square number to the array
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //Grabs the square number and sets the x or o depending on the turn
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = "url('./images/x.png')";
        } else {
            select.style.backgroundImage = "url('./images/o.png')";
        }
        //Sets the array entre to the square number with the active player that placed it
        selectedSquares.push(squareNumber + activePlayer);
        //Checks to see if the placer won
        checkWinConditions();
        //changes player turn
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //plays placement audio
        audio('./media/place.mp3');
        if(activePlayer === 'O'){
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000)
        }
        return true;
    }
    //Function for the AI turn
    function computersTurn() {
        let success = false;
        let pickASquare;
        //While loop that makes the AI choose a random number and checks to see if it has been used yet, and places it if it's available, or roll again if it is taken
        while(!success){
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

//Check win condition function to test array sets
function checkWinConditions() {
    //Potential win types with line coords
    if          (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    else if     (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if     (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if     (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if     (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if     (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if     (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    else if     (arrayIncludes('2X', '4X', '6X')) {drawWinLine(100, 508, 510, 90)}
    else if     (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if     (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if     (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if     (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if     (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if     (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if     (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    else if     (arrayIncludes('2O', '4O', '6O')) {drawWinLine(100, 508, 510, 90)}
    //Tie conditions with media play
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }
    //Array check for win condition
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) { return true }
    }
}

//Function to disable player click while the AI is taking its turn
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000)
}

//Audio function defined
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//Function to draw a line upon a win. Takes in win condition coords and draws a line accordingly
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //Clears the board completely after a game win
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//Function to reset the game upon completion
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}