/*
Sep 18, 2025 - 9:25 AM
Julia Marques Batista (200610604)
LAB02 - JavaScript Rock-Paper-Scissors
*/

var prompt = require('prompt');

//Start the prompt
prompt.start();



//Ask the user for input
prompt.get(['userSelection'], function (err, result) {
    if(err){
        console.error('Error getting input');
        return;
    }

    //Get the user input
    let userSelection = result.userSelection.toLowerCase();

    //Generate computer selection
    let random = Math.random();
    let computerSelection = '';

    if(random <=0.34){
        computerSelection = 'paper';

    }else if(random <= 0.67){
            computerSelection = 'scissors';
        
        }else{
            computerSelection = 'rock';
        }
    

    console.log('User chose:',userSelection);
    console.log('Computer chose:',computerSelection);

    //Determine the winner
    if(userSelection === computerSelection){
        console.log("It is a tie!");
    }
        else if(
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'paper') ||
        (userSelection === 'paper' && computerSelection === 'rock')
        ){
            console.log("User Wins!")
        } else {
            console.log("Computer Wins!")
        }
    

});