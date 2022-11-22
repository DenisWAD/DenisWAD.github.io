/*
    Week 8 Lab
    Denis Murray
    16/11/22
*/

/*
    Game Rules
    1 - Rock
    2 - Paper
    3 - Scissors
*/
function startGame(){
    var userChoice;
    var CPUChoice;

    //Randomize CPU Choice
    CPUChoice = calcCPUChoice();
    userChoice = prompt("Input your guess as a number: \n1 - Rock\n2 - Paper\n2 - Scissors");
    
    //Calc result
    //If user chooses Rock
    if (userChoice == 1){
        alert("You choose Rock");
        if(CPUChoice == 1) {
            alert("DRAW! The CPU choose Rock" );
        }
        else if (CPUChoice == 2){
            alert("LOSE! The CPU choose Paper");
        }
        else {
            alert("WINNER! The CPU choose Scissors");
        }
    }
    //If user choose Paper
    else if (userChoice == 2){
        alert("You choose Paper");
        if(CPUChoice == 1) {
            alert("WINNER! The CPU choose Rock" );
        }
        else if (CPUChoice == 2){
            alert("DRAW! The CPU choose Paper");
        }
        else {
            alert("LOSE! The CPU choose Scissors");
        }

    }
    //If user choose Scissors
    else if (userChoice == 3){
        alert("You choose Scissors");
        if(CPUChoice == 1) {
            alert("LOSE! The CPU choose Rock" );
        }
        else if (CPUChoice == 2){
            alert("Winner! The CPU choose Paper");
        }
        else {
            alert("Draw! The CPU choose Scissors");
        }
    }
    //Any other input
    else {
        alert("Please enter only a number between 1 - 3")
    }
    
    
}

function calcCPUChoice(){
    CPUChoice = Math.floor((Math.random() * 3) + 1)
    return CPUChoice;
}
