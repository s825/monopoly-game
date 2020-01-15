var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }


function printNumber(num1, num2) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = `${num1}, ${num2}`;
}

var button = document.getElementById('button');

//button.onclick = takeTurn();



//to play game:
function takeTurn(){
  rollDice();
  movePiece(player,rolled);
}



//set players turn
let players = [1,2,3,4],
    player = 1;

function changePlayer(curPlayer){
  if(curPlayer < players.length){
    player++
  } else {
    player = 1;
  }
}



//roll dice
let rolled = 0;

function rollDice(){
    let result1 = dice.roll(),
      result2 = dice.roll(),
      total = result1 + result2;
    printNumber(result1,result2);
    rolled = total;
}

//move by dice roll
function movePiece(piece, moveBy) {
  currentSpace = 2;
  targetSpace = currentSpace + moveBy;
  piece = document.getElementById(piece);
  piece.remove()
  targetSpace = document.querySelector(`#space${targetSpace} .container`);
  targetSpace.appendChild(piece);
} //figure out how to get your current piece location and modify thos function so it moves.



