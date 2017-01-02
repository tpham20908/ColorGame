var num = 12;
var pickedColor;
var colors = [];
var squares = document.getElementsByClassName('square');
var h1 = document.querySelector("h1");
var colorDilplay = document.getElementById('rgbDisplay');
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var level = document.querySelectorAll(".level");

init();

function init() {
  // level buttons event listener
  setupLevel();

  // setup squares
  setupSquares();

  // reset game
  reset();
}

resetBtn.addEventListener("click", function() {
  reset();
  this.textContent = "New Color";
  h1.style.background = "steelblue";
});

function setupLevel() {
  for (var i = 0; i < level.length; i++) {
    level[i].addEventListener("click", function() {
      // remove all buttons's background
      for (var j = 0; j < level.length; j++) {
        level[j].classList.remove("difficultySelected");
      }
      // add background on this button
      this.classList.add("difficultySelected");
      // determine game's level (num = ?)
      (this.textContent === "Easy") ? num = 4 :
      ((this.textContent === "Medium") ? num = 8 : num = 12);
      // reset game
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < num; i++) {
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
}

function winning(color, number) {
  for (var i = 0; i < number; i++) {
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

function reset() {
  // generate new random colors
  colors = generateRandomColors(num);

  for (var i = 0; i < squares.length; i++) {
    (colors[i]) ? squares[i].style.background = colors[i] :
                  squares[i].style.background = "none";
  }

  // pickColor
  pickedColor = pickColor();
  // reset rgbDisplay
  colorDilplay.textContent = pickedColor;
  // set new text on Reset button
  this.textContent = "New Color";

  h1.style.background = "steelblue";
  message.textContent = "";
}