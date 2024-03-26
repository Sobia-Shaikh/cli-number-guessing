
import inquirer from "inquirer";


//1. coputer will generate number

//2.User input for guessing numbercls


//3.computer user input with computer generated number and show result
 
//const randomNumber=13;

const randomNumber=Math.floor(Math.random()*6+1);
//console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"plz guess a number b/w 1-6",
    },
]);
//consol.log(randomNumber);

if(answer.userGuessedNumber===randomNumber)
{
    console.log("congratulation! you guess right number");
}
else{
    console.log("you guess wrong number");
}



