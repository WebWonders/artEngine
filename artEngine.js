/*
 * Courtesy of WebWonders
 *
 * Created with Komodo Edit and GitHub
 *
 * Engine requires a brower supporting HTML5 and the HTML5 <canvas> element
 *
 * IMPORTANT NOTE: for artEngine to run properly, create a <canvas> element with the id artCanvas
 */

var canvas = document.getElementById('artCanvas');
var ctx = canvas.getContext('2d');

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

function Sprite(Isrc, height, width, xCoordinate, yCoordinate) {
    this.image = new Image();
    this.image.src = Isrc;
    this.width = width;
    this.height = height;
    this.x = xCoordinate;
    this.y = yCoordinate;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.visible = true;
    this.update = function(){
    this.x += this.vx;
    this.y += this.vy;
    this.checkBounds();
    if (this.visible === true){
      this.draw();
    }
  };
}

function aRectangle(width, height, color, xCoordinate, yCoordinate) {
    this.width = width;
    this.height = height;
    this.x = xCoordinate;
    this.y = yCoordinate;
    this.color = color;
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    };
}

function aCircle(radius, color, xCoordinate, yCoordinate) {
    this.radius = radius;
    this.x = xCoordinate;
    this.y = yCoordinate;
    this.color = color;
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

/*
 * What code is needed for use with this engine:
 * function draw() {
 *   myStuff.draw();
 *   myOtherStuff.draw();
 *   myLastStuff.draw();
 * }
 * draw();
 *
 * Replace the myStuff, myOtherStuff, and myLastStuff objects with actual objects
 * Write the draw() function after creating your objects
 */