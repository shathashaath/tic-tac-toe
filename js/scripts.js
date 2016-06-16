//Business Logic
function Player(playerMark) {
  this.playerMark = playerMark;
  this.spacesTaken = [];
}

Player.prototype.turn = function() {
  // var xPlayer = new Player("X");

  if (=== ) {
    alert("Now it's the other player's turn");
  }
}



//User Interface Logic
$(document).ready(function(event) {

  var xPlayer = new Player("X");
  var oPlayer = new Player("O");


  $("#s1").click(function(event) {
    // xPlayer.turn();
    $("#s1").text(xPlayer.playerMark);
  });

  // $("#s2").click(function(event){
  //   $("#s2").text(oPlayer.playerMark);
  // });
  //
  // $("#s3").click (function(event){
  //   $("#s3").text(xPlayer.playerMark);
  // });
  //
  // $("#s4").click(function(event) {
  //   $("#s4").text(oPlayer.playerMark);
  // });
  //
  // $("#s5").click(function(event) {
  //   $("#s5").text(xPlayer.playerMark);
  // });
  //
  // $("#s6").click(function(event) {
  //   $("#s6").text(oPlayer.playerMark);
  // });
  //
  // $("#s7").click(function(event) {
  //   $("#s7").text(xPlayer.playerMark);
  // });
  //
  // $("#s8").click(function(event) {
  //   $("#s8").text(oPlayer.playerMark);
  // });
  //
  // $("#s9").click(function(event) {
  //   $("#s9").text(xPlayer.playerMark);
  // });
});
