// globals//
// answers to the puzzle
const answer = [ 
'', '', 'B', 'M', 'W', 
'T', 'O', 'R', 'A', 'H', 
'O', 'C', 'E', 'L', 'O', 
'T', 'H', 'A', 'T', '', 
'S', 'O', 'D', 'A', '' ]
// the empty puzzle before adding the letters
var userInput = [ 
  '', '', '', '', '', 
  '', '', '', '', '', 
  '', '', '', '', '', 
  '', '', '', '', '', 
  '', '', '', '', '' ]

function UpdateBoard(id){
  document.getElementById(id).style.backgroundColor = "#ccc"
  var resp = window.prompt("type letter")
  var letters = /^[A-Za-z]+$/;
  while (resp.length > 1 || !(resp.match(letters))){
    resp = null
    var resp = window.prompt("type letter")
  }
// use letter only and make all inputted letters uppercase
  var div = document.getElementById(id);
  div.innerHTML = resp.toUpperCase();
}

function convertAnswer(){
  var didLose = false
  for(i = 0; i < 25; i ++){
    var buttonId = 'block' + i 
    var divButton = document.getElementById(buttonId)
  if(!(divButton.innerHTML === answer[i])) {
    didLose = true
    divButton.style.backgroundColor = "#ff0000"
  }
  }
    alert(didLose ? "you lose try again" : "you win")
}


