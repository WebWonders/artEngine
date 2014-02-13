/*
 * Courtesy of WebWonders
 *
 * Created with Komodo Edit and GitHub
 *
 * Engine requires a brower supporting HTML5 and the HTML5 <canvas> element
 *
 */
function DrawingBoard() {
    this.canvas = document.createElement("canvas");
    this.canvas.style.backgroundColor = "yellow";
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    
    this.setSize = function(width, height) {
        this.canvas.height = height;
        this.canvas.width = width;
    }
    
    this.setColor = function(color) {
        this.canvas.style.backgroundColor = color;
    }
}

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

function aRectangle(board, width, height, color, xCoordinate, yCoordinate) {
    this.canvas = board;
    this.ctx = canvas.getContext('2d');
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

function aCircle(board, radius, color, xCoordinate, yCoordinate) {
    this.canvas = board;
    this.ctx = canvas.getContext('2d');
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

function aEllipse(board, xCoordinate, yCoordinate, width, height) {
    this.canvas = board;
    this.ctx = canvas.getContext('2d');
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
    
function aTriangle(board, x1, y1, x2, y2, x3, y3, color) {   
    this.canvas = board;
    this.ctx = canvas.getContext('2d');
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
