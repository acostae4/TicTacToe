let cells = document.querySelectorAll('.row > div');
let result = document.querySelector('.gameResults');
//Index positions needed to determine winner of game
//console.log(cells);
let cellsArr = [];
alterArr();
let xTurn = true;
let count = 0;
//Add event listeners to each space
for(let i = 0; i < cellsArr.length; i++){
    cellsArr[i].addEventListener('click', function(){
        if(xTurn === true && cells[i].innerHTML == "" && count <= 8){
            cellsArr[i].innerHTML = "X";
            count++;
            switchTurns();
            calcWinner("X");
        }else if(xTurn === false && cells[i].innerHTML == "" && count <= 8){
            cellsArr[i].innerHTML = "O";
            count++;
            switchTurns();
            calcWinner("O");
        }
        //Presents a draw when all spaces are filled on the board
        if(count == 9){
            result.innerHTML = "Draw!";
        }
    });
}
//Uses the class names for each index to determine winner
function calcWinner(type){
    let winningPatterns = [
        ['.one', '.two', '.three'],
        ['.four', '.five', '.six'],
        ['.seven', '.eight', '.nine'],
        ['.one', '.four', '.seven'],
        ['.two', '.five', '.eight'],
        ['.three', '.six', '.nine'],
        ['.one', '.five', '.nine'],
        ['.three', '.five', '.seven']
    ];
    //Assigns each row item for the winningPatterns to variables that are compared to the player's moves.
    for(let i = 0; i < winningPatterns.length; i++){
        [a,b,c] = [winningPatterns[i][0], winningPatterns[i][1], winningPatterns[i][2]];

        if(document.querySelector(a).innerHTML == type && document.querySelector(b).innerHTML == type && document.querySelector(c).innerHTML == type){
            result.innerHTML = `${type} Wins!! Hit reset to start over.`;
            count = 10;
        }
    }
}
//Function that switches the players turns after each move is completed
function switchTurns(){
    xTurn = !xTurn;
}
//Function that changes the nodelist 'cells' created to an array
function alterArr(){
    cellsArr = Array.prototype.slice.call(cells);
}
