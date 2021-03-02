const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizing() {
  canvas.height = 800;
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

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishPosition);
canvas.addEventListener("mousemove", draw);
