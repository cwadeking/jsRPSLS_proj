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
        let playerOne;
        let playerTwo;
        selectGameType();
        
    }
    
    selectGameType(){
        let outOfBoundsSelectionMinimum = 0;
        let outOfBoundsSelectionMaximum = 4;
        let gameSelection = prompt("There are three game modes.  Press 1 for Human vs. Computer, 2 for Human vs. Human, and 3 for Computer vs. Computer");
        while(!validateNumberChosen(gameSelection, 0, 4)){
            this.selectGameType();
        }
        switch(gameSelection){
            case "1":
                playerOne = new Human();
                playerTwo = new Computer();
                break;
            case "2":
                playerOne = new Human();
                playerTwo = new Human();
                break;
            case "3":
                playerOne = new Computer();
                playerOne = new Computer();
                break;
        }
    }
}
              
let testPlayer = new Human();
testPlayer.chooseGesture();

function validateNumberChosen(validNumber, outOfBoundsMinimum, outOfBoundsMaximum){
    if (!isNaN(validNumber) || validNumber > outOfBoundsMinimum || validNumber < outOfBoundsMaximum ) {
        return true;
    } else {
        return false;
    }
}