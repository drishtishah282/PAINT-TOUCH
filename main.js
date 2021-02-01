var last_px,last_py;
var mouseEvent="empty";
canvas=document.getElementById('myCanvas');
color="black";
width_ofline=1;
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown" ,  my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove" ,  my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_ofline;

        console.log("Last position of x and y coordinates are = ")
        console.log(" x = " + last_px + "y = " + last_py);
        ctx.moveTo(last_px , last_py);

        console.log("Current position of x and y coordinates are = ")
        console.log(" x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y); 
        ctx.stroke();
    }

    last_px = current_position_of_mouse_x;
    last_py = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup" ,  my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave" ,  my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}