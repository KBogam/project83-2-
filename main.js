color = document.getElementById("color").value;
line_of_width = document.getElementById("line_of_width").value;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var last_x;
var last_y;

canvas.addEventListener("touchstart" , my_touchstart);

function my_touchstart(e){
  last_x = e.touches[0].clientX-canvas.offsetLeft;
  last_y = e.touches[0].clientY-canvas.offsetTop;

  console.log(last_x  + "," + last_y);
}

canvas.addEventListener("touchmove" , my_touchmove);

function my_touchmove(e){
    current_x = e.touches[0].clientX-canvas.offsetLeft;
    current_y = e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_of_width;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();

    last_x = current_x;
    last_y = current_y;
}

