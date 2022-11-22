/*
    Week 9 Lab
    Denis Murray
    22/11/22
*/

/*
    ROCK PAPER SCISSORS - Best of 3!
    Game Rules
    1 - Rock
    2 - Paper
    3 - Scissors
*/
function startGame(){
    var userChoice;
    var CPUChoice;
    var endGame = false;
    var attemptsMade = 0;

    while(endGame == false){

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
                endGame = true;
            }
        }
        //If user choose Paper
        else if (userChoice == 2){
            alert("You choose Paper");
            if(CPUChoice == 1) {
                alert("WINNER! The CPU choose Rock" );
                endGame = true;
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
                endGame = true;
            }
            else {
                alert("Draw! The CPU choose Scissors");
            }
        }
        //Any other input
        else {
            alert("Please enter only a number between 1 - 3")
        }

        // Increment number of attemptsMade
        if(endGame==false){
            attemptsMade ++;
            alert("Attempts left: " + (3 - attemptsMade));
            if(attemptsMade == 3){
                endGame = true;
                alert("GAME OVER!")
            }
        }
    }    
    
}

function startSubjects(){
    var numSubjects;
    var subjectResult;

    numSubjects = prompt("How many subjects do you take?");
    for (i = 1; i <= numSubjects; i++){
        subjectResult = parseInt(prompt("What did you get in Subject Number " + i + "?"));
        if(subjectResult < 40){
            alert("<40%: Result is: F\nYou failed this subject :(");
        }
        else if(subjectResult < 50){
            alert("<50: Result is: D\nYou are eligible to repeat this subject!")
        }
        else if(subjectResult < 60){
            alert("<60: Result is: C\nYou can improve on this result")
        }
        else if(subjectResult < 80){
            alert("<80: Result is: B\nGood result!");
        }
        else if(subjectResult < 100){
            alert("Result is: A\nCongrats!");
        }
        else{
            alert("Please type in a result between 0 - 100");
        }
    }
}

function calcCPUChoice(){
    CPUChoice = Math.floor((Math.random() * 3) + 1)
    return CPUChoice;
}
