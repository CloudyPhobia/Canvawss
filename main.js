canvas = document.getElementById("canvas");
sketch = canvas.getContext("2d");
color = "purple";
sketch.beginPath();
sketch.strokeStyle = color;
sketch.lineWidth = 2 ;
sketch.arc(200, 200, 40, 0, 2*Math.PI);
sketch.stroke();
canvas.addEventListener("mousedown",MMD);
function MMD (e){
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;
    circle(mouseX, mouseY)
    console.log (mouseX + mouseY);
}
function circle(mouseX, mouseY){
    sketch.beginPath();
    sketch.strokeStyle = color;
    sketch.lineWidth = 2;
    sketch.arc(200, 200, 40, 0, 2*Math.PI);
    sketch.stroke();
}