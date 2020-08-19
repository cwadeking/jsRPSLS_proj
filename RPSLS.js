"use strict"
class Player{
    
    constructor(){
        let score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
    }
    chooseGesture(){}
    
    displayGestures(){
        for(let i = 0; i < this.gestures.length; i++){
            alert(`These are the allowed gestures to choose: `);
            alert(`${this.gestures[i]}`);
            
        }
    }
    
}

class Human extends Player{
    
    constructor(){
        super()
        
        
    }
    ChooseGesture(){
        
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
testPlayer.displayGestures();