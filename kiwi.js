img="";
status = "";

function preload() {
  console.log('preload')
  img=loadImage('https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg') } 


function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function draw() {
  image(img, 0, 0, 640, 420)
  fill("#FF0000");
  text("Kiwis", 42, 30);
  noFill();
  stroke("#FF0000");
  rect(40, 10, 590, 400)
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