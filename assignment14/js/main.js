// app.js
// Add your JavaScript code, including canvas drawing logic, here
document.addEventListener('DOMContentLoaded', function () {
    // Canvas drawing logic
    const canvas = document.getElementById('geometricCanvas');
    const ctx = canvas.getContext('2d');
  
    // Draw a simple geometric design
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(50, 50, 300, 200);
  
    ctx.beginPath();
    ctx.arc(200, 150, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'darkorange';
    ctx.stroke();
  });
  