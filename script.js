let whoWins = [];
let r1 = 'ROCK';
let p1 = 'PAPER';
let s1 = 'SCISSOR';
//computer selection function
let compSelection = () => {
    let choices = ['ROCK','PAPER','SCISSOR'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//function to check who wins
function winCheck(computerSelection, userSelection){
     //  Rock(1)   Paper(2)    Scissor(3)    
    

    //Draw situation    
    if (computerSelection === userSelection){
        return `It is a draw: you chose ${userSelection} and computer chose ${computerSelection}`;
    }
    //User wins situation
    else if ((computerSelection === r1 && userSelection === p1) || (computerSelection === p1 && userSelection === s1) || (computerSelection === s1 && userSelection === r1)){
        return  `you won: you chose ${userSelection} and computer chose ${computerSelection}`;
    }
    //computer wins situation    
    else{
        return `Computer won: you chose ${userSelection} and computer chose ${computerSelection}`;
    }
};

//main function 
function game(){

    //computer Selection variable declaration and calling function to assign a random value 
    let computerSelection = compSelection();

    //asking user to input his/her choice and converting it into upper case 
    let userSelection = prompt("Please choose Rock paper scissor with correct spelling: ");
    userSelection = userSelection.toUpperCase();
    let valid = false;

    while(!valid){
        if(userSelection !== r1 && userSelection !== p1 && userSelection !== s1){
            userSelection = prompt("Please check your spelling again: ");
            userSelection = userSelection.toUpperCase();
        }
        else{
            valid = true;
        }
    }
    // do{
    //      userSelection = prompt("Please choose Rock paper scissor with correct spelling: ");
    //      userSelection = userSelection.toUpperCase();    
    // }while(userSelection != r1 || userSelection != p1 || userSelection != s1)
   

    
    return  winCheck(computerSelection, userSelection);
};

//playing 5 times
for(let i =  0; i < 5; i++) {
    whoWins.push(game());
}

for (let i = 0; i < 5; i++){

    console.log(whoWins[i]);

}

