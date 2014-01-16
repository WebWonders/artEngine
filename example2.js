var face = new aCircle(100, 'yellow', 200, 200);
var rightEye = new aCircle(10, 'black', 150, 150);
var leftEye = new aCircle(10, 'black', 250, 150);
var mouth = new aCircle(70, 'black', 200, 220);
var mouthCover = new aCircle(70, 'yellow', 200, 212);
function draw() {
  face.draw();
  rightEye.draw();
  leftEye.draw();
  mouth.draw();
  mouthCover.draw();
}
draw();
