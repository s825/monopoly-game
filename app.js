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

button.onclick = function() {
  var result1 = dice.roll();
  var result2 = dice.roll();
  printNumber(result1,result2);
};