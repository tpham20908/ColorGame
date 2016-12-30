var num = 12;
var colors = generateRandomColors(num);
var squares = document.getElementsByClassName('square');
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");

document.getElementById('rgbDisplay').textContent = pickedColor;

resetBtn.addEventListener("click", function() {
  // generate new random colors
  colors = generateRandomColors(12);
  // allocate colors on squares
  for (var i = 0; i < num; i++) {
    squares[i].style.background = colors[i];
  }
  // reset pickedColor
  pickedColor = pickColor();
  // reset rgbDisplay
  document.getElementById('rgbDisplay').textContent = pickedColor;

  this.textContent = "New Color";
  h1.style.background = "#333";
});


for (var i = 0; i < num; i++) {
  // allocate color on each square
  squares[i].style.background = colors[i];
  // square listens "click" and calls in function
  squares[i].addEventListener("click", function() {
    if (this.style.background === pickedColor) {
      winning(pickedColor);
      h1.style.background = pickedColor;
      message.textContent = "Correct!";
      resetBtn.textContent = "Play Again";
    }
    else {
      this.style.background = "#333";
      message.textContent = "Try Again!";
    }
  });
}

function winning(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * num);
  return colors[random];
}

function generateRandomColors(number) {
  // create an array
  var arr = [];
  // iterate number of array's element
  for (var i = 0; i < number; i++) {
    // push color into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
