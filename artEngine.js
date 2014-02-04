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

function Image(Isrc, height, width, xCoordinate, yCoordinate) {
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

function Rectangle(width, height, color, xCoordinate, yCoordinate) {
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

function Circle(radius, color, xCoordinate, yCoordinate) {
    this.radius = radius;
    this.x = xCoordinate;
    this.y = yCoordinate;
    this.color = color;
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    };
}

function Ellipse(xCoordinate, yCoordinate, width, height) {
    var kappa = 0.5522848;
    this.ox = (width / 2) * kappa;
    this.oy = (height / 2) * kappa;
    this.xe = xCoordinate + width;   
    this.ye = yCoordinate + height; 
    this.xm = xCoordinate + width / 2;
    this.ym = yCoordinate + height / 2;
   
    ctx.beginPath();
    ctx.moveTo(xCoordinate, ym);
    ctx.bezierCurveTo(xCoordinate, ym - oy, xm - ox, yCoordinate, xm, yCoordinate);
    ctx.bezierCurveTo(xm + ox, yCoordinate, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, xCoordinate, ym + oy, xCoordinate, ym);
    ctx.closePath();
    ctx.stroke();
}
    
function Triangle(x1, y1, x2, y2, x3, y3, color) {   
    this.color = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.stroke();
    this.draw = function() {
       ctx.moveTo(x1, y1);
       ctx.lineTo(x2, y2);
       ctx.lineTo(x3, y3);
       ctx.closePath();
       ctx.fillStyle = this.color;
       ctx.stroke();
    };
}
