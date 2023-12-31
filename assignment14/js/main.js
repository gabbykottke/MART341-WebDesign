document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('geometricCanvas');
    const ctx = canvas.getContext('2d');
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
  