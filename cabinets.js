img="";
status = "";

function preload() {
  console.log('preload')
  img=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHPa_R-dvl8g9FZw0clByrfuPBhTsRYfBXQ&usqp=CAU') } 


function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function draw() {
  image(img, 0, 0, 640, 420)
  fill("#FF0000");
  text("Cat", 132, 30);
  noFill();
  stroke("#FF0000");
  rect(130, 10, 350, 400)
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