// globals//
// document.body.onload = UpdateBoard
// const crosswordContainer = document.getElementById('crossword-container');
// const words = ['rain', 'color', 'odor',;

// function createTitle() {
//   const h1Element = document.createElement("h1")
//   const content = document.createTextNode("kenesha's crossword puzzle")
//   h1Element.appendChild(content);
//   const titleDiv = document.getElementById("title-container")
//   document.body.insertBefore(h1Element, titleDiv)
//   createBoard()
// }
// call the function with 3 rows and 3 columns
// function createBoard(rows = 3, cols = 3) {
// for (let i = 0; i < rows; i++){
//   const boardDiv = document.getElementById("boardDiv-container")
//   for(let j = 0; j < cols; j++) {
//     const divElement = document.createElement("div")
//     const content = document.createTextNode("x")
//     divElement.appendChild(content);
//     // const boardDiv = document.getElementById("boardDiv-container")
//   document.body.insertBefore(divElement, boardDiv)
//   }
//   boardDiv.
// }
// }

// function createBlock() {
//   // var resp = window.prompt("Your question")
//   // console.log(resp)
//   var div = document.getElementById('block3');
//   div.innerHTML += resp;
// }
const answer = [ 
'', '', 'B', 'M', 'W', 
'T', 'O', 'R', 'A', 'H', 
'O', 'C', 'E', 'L', 'O', 
'T', 'H', 'A', 'T', '', 
'S', 'O', 'D', 'A', '' ]

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
// function startTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   setInterval(function () {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//           timer = 0;
//            timer = duration; // uncomment this line to reset timer automatically after reaching 0
//       }
//   }, 1000);
// }

// window.onload = function () {
//   var time = 60 / 2, // your time in seconds here
//       display = document.querySelector('#safeTimerDisplay');
//   startTimer(time, display);
// };
// Create crossword grid
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         crosswordContainer.appendChild(square);

//         const input = document.createElement('input');
//         input.setAttribute('maxlength', '1');
//         square.appendChild(input);

//         // Add event listener to check correctness
//         input.addEventListener('input', () => checkWord(i, j, input.value));
//     }
// }

// Function to check correctness of filled word
// function checkWord(row, col, value) {
//     const word = getWord(row, col);
//     const input = crosswordContainer.children[row * 10 + col].querySelector('input');

//     if (value.toLowerCase() === word[0]) {
//         input.classList.remove('incorrect');
//         input.classList.add('correct');
//     } else {
//         input.classList.remove('correct');
//         input.classList.add('incorrect');
//     }
// }

// Function to get the word associated with a square
// function getWord(row, col) {
//     // Your logic to determine words associated with each square
//     // For simplicity, returning a hardcoded word based on row and column
//     return words[row % words.length];
// }

