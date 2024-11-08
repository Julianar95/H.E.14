let imgArray = [];
let bgColor;
function preload() {
  imgArray[0] = loadImage("assets/Dragon.png");
  imgArray[1] = loadImage("assets/Unicorn.png");
  imgArray[2] = loadImage("assets/lochness.png");
  imgArray[3] = loadImage("assets/sparkles.png");
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");

  var button = createButton("Draw Dragon");
  button.parent("button-holder");
  button.mousePressed(dragonDraw);

  var button2 = createButton("Draw Unicorn");
  button2.parent("button-holder");
  button2.mousePressed(unicornDraw);

  var button3 = createButton("Draw Lochness");
  button3.parent("button-holder");
  button3.mousePressed(lochnessDraw);

  var button4 = createButton("Draw Random");
  button4.parent("button-holder");
  button4.mousePressed(randomDraw);

  var button5 = createButton("Clear Screen");
  button5.parent("button-holder");
  button5.mousePressed(clearScreen);

  var button6 = createButton("Save Image");
  button6.parent("button-holder");
  button6.mousePressed(saveImage);

  background(" #85b8e6");
  bgColor = color(random(255), random(255), random(255));
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {}

function dragonDraw() {
  image(imgArray[0], random(width), random(height), 100, 100);
}

function unicornDraw() {
  image(imgArray[1], random(width), random(height), 100, 100);
}

function lochnessDraw() {
  image(imgArray[2], random(width), random(height), 100, 100);
}

function randomDraw() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 100, 100);
}

function clearScreen() {
  background(bgColor);
}

function mousePressed() {
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(imgArray[3], mouseX, mouseY, 100, 100);
    }
  }
}

function mouseClicked() {
  bgColor = color(random(255), random(255), random(255));
}

function saveImage() {
  save("Picture.png");
}
