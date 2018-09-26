'use strict';

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');


// Square
c.fillStyle = 'pink';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'blue';
c.fillRect(300, 300, 100, 100);
c.fillStyle = 'orange';
c.fillRect(400, 400, 100, 100);


// Line
c.beginPath()
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "red";
c.stroke();


// Arc and circle
c.arc(300, 300, 20, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.arc(100, 600, 40, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.stroke();


// Ten paths
for (let i = 0; i < 10; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 40, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
}


// Animation

let radius = 60;
let x = Math.random() * (innerWidth - radius * 2) + radius;
let dx = (Math.random() - 0.5) * 10;
let y = Math.random() * (innerHeight - radius * 2) + radius;
let dy = (Math.random() - 0.5) * 10;
function animate() {
  requestAnimationFrame(animate);
  // Redraws the page removes old image
  c.clearRect(0, 0, innerWidth, innerHeight);

  // Draws circle
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "#a56796";
  c.stroke();

  // X animation
  if (x + radius > innerWidth || x - radius < 0) {
    dx = - dx;
  }
  x += dx;

  // Y animation
  if (y + radius > innerHeight || y - radius < 0) {
    dy = - dy;
  }

  y += dy;

}

//animate(); //-- adding comments will remove stops single animation



// Create multiple random circles class
const canvasObj = canvas.getContext('2d');

function Circles(x, y, radius, dx, dy, color = '#000000', angle = 0, circum = Math.PI*2){
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
  this.angle = angle;
  this.circum = circum


  this.draw = function (clear = true) {
    canvasObj.beginPath();
    canvasObj.arc
    canvasObj.arc(this.x, this.y, this.radius, this.angle, this.circum , false);
    canvasObj.strokeStyle = this.color;
    canvasObj.stroke();
    canvasObj.fillStyle = this.color;
    canvasObj.fill();
  }

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

    this.draw();
  }
}

let max = 40;
let min = 10;


// Creates a hundred circles
let circleArr = [];
for (let i = 0; i < 100; i++) {
  let angle = Math.floor(Math.random() * (max - min + 1)) + min;
  let color = '#'+Math.floor(Math.random()*16777215).toString(16);
  let radius = Math.floor(Math.random() * (max - min + 1)) + min;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 8;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dy = (Math.random() - 0.5) * 8;

  circleArr.push(new Circles(x, y, radius, dx, dy, color,angle));
}

function animateClass() {
  requestAnimationFrame(animateClass);
  canvasObj.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }

}

animateClass(); //-- adding comments will remove stops animation







