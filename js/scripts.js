//Business Logic

function Player() {
  this.player1 = "X";
  this.player2 = "O";
}

Player.prototype.space = function() {
  var newX = this.player1;
  var newO = this.player2;
}



//User Interface Logic
$(document).ready(function(event) {

  var newPlayer = new Player();

  $("#s1").click(function(event) {
    newPlayer.space(this.player1);
    alert(this.player1);
  });
});
