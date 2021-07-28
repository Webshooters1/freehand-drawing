canvas = document.getElementById("myCanvas");
color = "red";

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventlistener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown";
}

canvas.addEventlistener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventlistener("mouseUP", my_mouseUP);

function my_mouseUP(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventlistener("mousemove", my_mousemove);

function my_mousemove(e)
{
   current_position_of_x = e.clientX - canvas.offsetLeft
   current_position_of_y = e.clientY - canvas.offsetTop

   if (mouseEvent == "mousedown")  {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last postion of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("current postion of x and y coordinates = ");
    console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
   }

   last_position_of_x = current_position_of_x;
   last_position_of_y = current_position_of_y;
}