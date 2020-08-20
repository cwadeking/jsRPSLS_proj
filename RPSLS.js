"use strict"
class Player{
    
    constructor(){
        this.score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
        this.chosenGesture = "";
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
        this.chosenGesture = prompt("Pick a number", this.displayGestures());
        this.validateGestureChosen(this.chosenGesture);        
    }
}

class Computer extends Player{
    
    constructor(){
        super()
    }
}

class Game{
    constructor(){
        let playerOne;
        let playerTwo;
        selectGameType();
        
    }
    
    selectGameType(){
        let gameSelection = prompt("There are three game modes.  Press 1 for Human vs. Computer, 2 for Human vs. Human, and 3 for Computer vs. Computer");
        
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
            default:
                prompt("That was not a proper selection, choose again");
                this.selectGameType();
        }
    }
}
                
let testPlayer = new Human();
testPlayer.chooseGesture();