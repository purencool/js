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