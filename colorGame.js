var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares); //how many colors generate in the array
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i]
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});



resetButton.addEventListener("click", function() {
  //generate all new Colors
colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "";
//chage colors of squares
for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
}
h1.style.background = "steelblue";
resetButton.textContent = "new Colors";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].
  addEventListener("click",function() {
      var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }

  });
}


function changeColor(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
  squares[i].style.backgroundColor = color;
  }
}


function pickColor() {
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}


function generateRandomColors(num) {
  //make an array
  var arr = []
  //add random colors to array
  for(var i = 0; i < num; i++) {
  //get random colors and push into arr
  arr.push(randomcolor())
  }
  //return to arr
  return arr;
}


function randomcolor() {
  //pick a "red" from 0 -255
var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 -255
var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 -255
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}
