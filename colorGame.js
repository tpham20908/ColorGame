var num = 12;
var colors = generateRandomColors(num);
var squares = document.getElementsByClassName('square');
var h1 = document.querySelector("h1");
var pickedColor = pickColor(num);
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");

document.getElementById('rgbDisplay').textContent = pickedColor;

easy.addEventListener("click", function() {
  num = 4;
  easy.classList.add("difficultySelected");
  medium.classList.remove("difficultySelected");
  hard.classList.remove("difficultySelected");
  reset(num);
});

medium.addEventListener("click", function() {
  num = 8;
  medium.classList.add("difficultySelected");
  easy.classList.remove("difficultySelected");
  hard.classList.remove("difficultySelected");
  reset(num);
});

hard.addEventListener("click", function() {
  num = 12;
  hard.classList.add("difficultySelected");
  medium.classList.remove("difficultySelected");
  easy.classList.remove("difficultySelected");
  reset(num);
});

resetBtn.addEventListener("click", function() {
  reset(num);
  this.textContent = "New Color";
  h1.style.background = "steelblue";
});


for (var i = 0; i < num; i++) {
  // allocate color on each square
  squares[i].style.background = colors[i];
  // square listens "click" and calls in function
  squares[i].addEventListener("click", function() {
    if (this.style.background === pickedColor) {
      winning(pickedColor, num);
      h1.style.background = pickedColor;
      message.textContent = "Correct!!!";
      resetBtn.textContent = "Play Again";
    }
    else {
      this.style.background = "#333";
      message.textContent = "Try Again!";
    }
  });
}

function winning(color, number) {
  for (var i = 0; i < number; i++) {
    squares[i].style.background = color;
  }
}

function pickColor(number) {
  var random = Math.floor(Math.random() * number);
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

function reset(number) {
  // generate new random colors
  colors = generateRandomColors(number);

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.background = colors[i];
    if (!colors[i]) {
      squares[i].style.display = "none";
    }
  }

  pickedColor = pickColor(number);

  // reset rgbDisplay
  document.getElementById('rgbDisplay').textContent = pickedColor;

  this.textContent = "New Color";
  h1.style.background = "steelblue";
  message.textContent = "";
}