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
    $("#s1-value").text(newPlayer.player1);
  });
  $("#s2").click(function(event){
    $("#s2-value").text(newPlayer.player1);
  });
  $("#s3").click (function(event){
    $("#s3-value").text(newPlayer.player1);
  });
  $("#s4").click(function(event) {
    $("#s4-value").text(newPlayer.player1);
  });
  $("#s5").click(function(event) {
    $("#s5-value").text(newPlayer.player1);
  });
  $("#s6").click(function(event) {
    $("#s6-value").text(newPlayer.player1);
  });
  $("#s7").click(function(event) {
    $("#s7-value").text(newPlayer.player1);
  });
  $("#s8").click(function(event) {
    $("#s8-value").text(newPlayer.player1);
  });
  $("#s9").click(function(event) {
    $("#s9-value").text(newPlayer.player1);
  });
});
