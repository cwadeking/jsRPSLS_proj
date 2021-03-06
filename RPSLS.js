"use strict"

class Player{
    
    constructor(){
        this.score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
        this.chosenGesture = this.chooseGesture;
    }
    chooseGesture(){}
        
    displayGestures(){
        let counter = 0;
        alert("The following is a list of gestures you can select from");
        alert(this.gestures.map(function(el){
            counter++
            return counter + ":" + el;
        }).join("\n"));
    }
}

class Human extends Player{
    
    constructor(){
        super()
        
        
    }
    chooseGesture(){        
        this.numberAssociatedWithGesture = prompt("Pick a number", this.displayGestures());
        while(!validateNumberChosen(this.numberAssociatedWithGesture, 0, this.gestures.length)){
            this.chooseGesture();
        }
        return this.gestures[this.numberAssociatedWithGesture];        
    }

    
}

class Computer extends Player{
    
    constructor(){
        super()
    }

    randomInteger(maxInteger){
        let pickedInteger = Math.floor(Math.random() * maxInteger);
        return pickedInteger;
    }
    chooseGesture(){
        this.chosenGesture = this.gestures[this.randomInteger(this.gestures.length)];
    }
}

class Game{
    constructor(){
        this.playerOne;
        this.playerTwo;
        this.scoreLimit;
    }
    
    selectGameType(gameSelection = null){
        let outOfBoundsSelectionMinimum = 0;
        let outOfBoundsSelectionMaximum = 4;
        if(gameSelection === null)
        {
            gameSelection = prompt("There are three game modes.  Press 1 for Human vs. Computer, 2 for Human vs. Human, and 3 for Computer vs. Computer");
            while(!validateNumberChosen(gameSelection, outOfBoundsSelectionMinimum, outOfBoundsSelectionMaximum)){
                this.selectGameType();
            }
        }
        switch(gameSelection){
            case "1":
                this.playerOne = new Human();
                this.playerTwo = new Computer();
                this.runGame();
                break;
            case "2":
                this.playerOne = new Human();
                this.playerTwo = new Human();
                this.runGame();
                break;
            case "3":
                this.playerOne = new Computer();
                this.playerOne = new Computer();
                break;
        }
    }

    onePlayerGame(){
        playerOne = new Human();
        playerTwo = new Computer();
    }
    twoPlayerGame(){
        playerOne = new Human();
        playerTwo = new Human();
    }
    simulationGame(){
        playerOne = new Computer();
        playerTwo = new Computer();
    }
    compareGestures(playerOneGesture, playerTwoGesture){
        alert(`${playerOne} chose ${playerOneGesture} and ${playerTwo} chose ${playerTwoGesture}`)
        if(playerOneGesture === playerTwoGesture){
            alert(`Player's tie! No Score!`)
        }
        else if(playerOneGesture === "rock"){
            if(playerTwoGesture === "lizard" || playerTwoGesture === "scissors"){
                alert(`${playerOne} wins!`);
                playerOne.score++;
            }
        }
        else if(playerOneGesture === "paper"){
            if(playerTwoGesture === "rock" || playerTwoGesture === "spock"){
                alert(`${playerOne} wins!`);
                playerOne.score++;
            }
        }
        else if(playerOneGesture === "scissors"){
            if(playerTwoGesture === "paper" || playerTwoGesture === "lizard"){
                alert(`${playerOne} wins!`);
                playerOne.score++;
            }
        }
        else if(playerOneGesture === "lizard"){
            if(playerTwoGesture === "paper" || playerTwoGesture === "spock"){
                alert(`${playerOne} wins!`);
                playerOne.score++;
            }
        }
        else if(playerOneGesture === "spock"){
            if(playerTwoGesture === "rock" || playerTwoGesture === "scissors"){
                alert(`${playerOne} wins!`);
                playerOne.score++;
            }
        }
        else{
            alert(`${playerTwo} wins!`);
            playerTwo.score++;
        }
    }
    setScoreLimit(){
        let limitOfScore = prompt(`What score would you like to play to?`);
        while(!validateNumberChosen(limitOfScore, 0, 100)){
            this.setScoreLimit();
        }
    }
    gamePlay(){
        while(playerOne.score < this.scoreLimit && playerTwo.score < this.scoreLimit){
            this.compareGestures(playerOne.chooseGesture(),playerTwo.chooseGesture())
        }

    }
    runGame(){
        this.setScoreLimit();
        this.gamePlay();
    }
}

let game = new Game();



function validateNumberChosen(validNumber, outOfBoundsMinimum, outOfBoundsMaximum){
    if (!isNaN(validNumber) || validNumber > outOfBoundsMinimum || validNumber < outOfBoundsMaximum ) {
        return true;
    } else {
        return false;
    }
}
function displayToTextBox(message) {
    document.getElementById("myTextBox").innerHTML = message;
  }