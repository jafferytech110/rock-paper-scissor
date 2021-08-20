// //Game Start Window
// //assigning variable for display changes and button
const startGame = document.querySelector(".startGame");
const startButton = document.getElementById("startButton");
const gameOn = document.querySelector(".gameOn");
const gameResult = document.querySelector(".gameResult");
//switching displays on button click
startButton.addEventListener('click',() => {
    startGame.style.display ="none";
    gameOn.style.display ="flex";
    
});

//winner declaration
function winnerDeclare(){
    //switching displays
    gameOn.style.display = "none";
    gameResult.style.display = "flex";
    //printing result
    if(playerObject.userWin > 2){
        const resultIs = document.querySelector(".resultIs");
        let heading1 = document.createElement("h2");
        heading1.textContent = "You have finally saved the humanity. Rest in peace now!";
        resultIs.appendChild(heading1);
    }
    else{
        const resultIs = document.querySelector(".resultIs");
        let heading1 = document.createElement("h2");
        heading1.textContent = "You have failed humanity! RIP!!!";
        resultIs.appendChild(heading1);
    }
    playerObject.userWin = 0;
    playerObject.computerWin = 0;
};
//function for computer selection
function computerWeapon(){
    let choices = ['ROCK','PAPER','SCISSOR'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//creating user object
let playerObject = {
    userWin: 0,
    computerWin: 0,
    

    //checking rock paper or scissor
    strike: function(weapon){
        let r1 = 'ROCK';
        let p1 = 'PAPER';
        let s1 = 'SCISSOR';

        if (weapon == computerWeapon()){
            let paragraph = document.createElement("p");
            paragraph.textContent = `It is a draw: you chose ${weapon} and computer chose ${computerWeapon()}`;
            document.querySelector(".currentResult").appendChild(paragraph);
                    
        }
        //User wins situation
        else if ((computerWeapon() === r1 && weapon === p1) || (computerWeapon === p1 && weapon === s1) || (computerWeapon() === s1 && weapon === r1)){
            let paragraph = document.createElement("p");
            paragraph.textContent = `you won: you chose ${weapon} and computer chose ${computerWeapon()}`;
            document.querySelector(".currentResult").appendChild(paragraph);
            this.userWin += 1; 
        }
        //computer wins situation    
        else{
            let paragraph = document.createElement("p");
            paragraph.textContent =  `Computer won: you chose ${weapon} and computer chose ${computerWeapon()}`;
            document.querySelector(".currentResult").appendChild(paragraph);
            this.computerWin += 1;
        }
        if(this.userWin > 2 || this.computerWin >2){
            winnerDeclare();
        }
    }

};



//taking user input 
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

rock.addEventListener('click', 
    function(){
        playerObject.strike('ROCK');
    }); 
paper.addEventListener('click', 
    function(){
        playerObject.strike('ROCK');
    });
scissor.addEventListener('click', 
    function(){
        playerObject.strike('ROCK');
    });
