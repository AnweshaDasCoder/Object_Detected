img="";
status = "";

function preload() {
  console.log('preload')
  img=loadImage('tv.jpeg') }


function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function draw() {
  image(img, 0, 0, 640, 420)
  fill("#FF0000");
  text("T.V.", 170, 110);
  noFill();
  stroke("#FF0000");
  rect(160, 100, 410, 220)
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  }