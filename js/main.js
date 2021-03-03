const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")
var btn3 = document.getElementById("btn-3")
var btn4 = document.getElementById("btn-4")
var btn5 = document.getElementById("btn-5")
var deleteButton = document.getElementById("delete")

function resizing() {
  canvas.height = window.innerHeight;
  canvas.width = 800;
}

resizing();

var painting = false;

function startPosition(e) {
  painting = true;
  draw(e);
}

function finishPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) {
    return;
  }
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

function changeColorToBlack(){
  ctx.strokeStyle = "black"
}
function changeColorToRed(){
  ctx.strokeStyle = "red"
}
function changeColorToYellow(){
  ctx.strokeStyle = "yellow"
}
function changeColorToGreen(){
  ctx.strokeStyle = "green"
}
function changeColorToBlue(){
  ctx.strokeStyle = "blue"
}

function deleteEverything(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishPosition);
canvas.addEventListener("mousemove", draw);
btn1.addEventListener("click",changeColorToBlack)
btn2.addEventListener("click",changeColorToRed)
btn3.addEventListener("click",changeColorToYellow)
btn4.addEventListener("click",changeColorToGreen)
btn5.addEventListener("click",changeColorToBlue)
deleteButton.addEventListener("click", deleteEverything)