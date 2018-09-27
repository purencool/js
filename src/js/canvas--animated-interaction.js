'use strict';

/**
 *  Window and canvas setup including event listners
 */
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasObj = canvas.getContext('2d');

window.addEventListener('mousemove', function (e) {
  param.x = e.x;
  param.y = e.y
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  param.circleArr = [];
  init();
});


window.addEventListener('mouseout', function (e) {
  e = e ? e : this.window.event
  let from = e.relatedTarget || e.toElement;
  if (!from || from.nodeName === "HTML") {
    param.x = "undefined";
    param.y = "undefined";
  }
});



/**
 *  Circle class
 * @param {*} x 
 * @param {*} y 
 * @param {*} radius 
 * @param {*} dx 
 * @param {*} dy 
 * @param {*} color 
 * @param {*} angle 
 * @param {*} circum 
 * @param {*} maxRadius 
 */
function Circles(x, y, radius, dx, dy, color = '#000000', angle = 0, circum = Math.PI * 2, maxRadius = 40) {
  this.radius = radius;
  this.minRadius = radius;
  this.maxRadius = maxRadius;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
  this.angle = angle;
  this.circum = circum


  /**
   *  Draw circles
   */
  this.draw = function () {
    canvasObj.beginPath();
    canvasObj.arc(this.x, this.y, this.radius, this.angle, this.circum, false);
    canvasObj.strokeStyle = this.color;
    canvasObj.stroke();
    canvasObj.fillStyle = this.color;
    canvasObj.fill();
  }

  /**
   *  Update movement of circles
   */
  this.update = function () {

    // X animation
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = - this.dx;
    }
    this.x += this.dx;

    // Y animation
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = - this.dy;
    }

    this.y += this.dy;

    // Interactivity
    if (param.x - this.x < 50
      && param.x - this.x > -50
      && param.y - this.y < 50
      && param.y - this.y > -50
    ) {
      if (this.radius < this.maxRadius) {
        this.radius += 1;
      }

    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    // Draw circles
    this.draw();
  }
}




/**
 * 
 * @param {*} param 
 */
function Init(param) {

  /**
   *  Parameters
   */
  this.param = param;

  /**
   *  Draw method
   */
  this.buildCircles = function () {
    for (let i = 0; i < this.param.numberOffCircles; i++) {
      let angle = 0;
      let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      let radius = Math.floor(Math.random() * (this.param.maxCircleSize - this.param.minCircleSize + 1)) + this.param.minCircleSize;
      let x = Math.random() * (innerWidth - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * 4;
      let y = Math.random() * (innerHeight - radius * 2) + radius;
      let dy = (Math.random() - 0.5) * 4;

      this.param.circleArr.push(new Circles(x, y, radius, dx, dy, color, angle));
    }
  }

  /**
   *  Animation method
   */
  this.animateClass = function () {
    this.param = param;
    function animateClass() {
      requestAnimationFrame(animateClass);
      canvasObj.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < param.circleArr.length; i++) {
        param.circleArr[i].update();
      }
    }
    animateClass();
  }

  /**
   * Run init class
   */
  this.run = function () {
    init.buildCircles();
    init.animateClass();
  }
}




/**
 *  Parameters
 */
const param = {
  x: undefined,
  y: undefined,
  maxCircleSize: 9,
  minCircleSize: 3,
  numberOffCircles: 600,
  circleArr: [],
}


const init = new Init(param);
init.run();









