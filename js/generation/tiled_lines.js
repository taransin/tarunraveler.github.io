const canvas = document.getElementById('tiled_lines_canvas');
const context = canvas.getContext('2d');
const size = 320;
const step = 20;
const dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

function draw(x, y, width, height) {
    const leftToRight = Math.random() >= 0.5;
    context.beginPath();
    context.strokeStyle="white";
    context.lineWidth = 3;
    if (leftToRight) {
        context.moveTo(x, y);
        context.lineTo(x + width, y + height);
    } else {
        context.moveTo(x + width, y);
        context.lineTo(x, y + height);
    }
    context.stroke();
}

function startDrawTiledLines(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let x = 0; x < size; x += step) {
        for (let y = 0; y < size; y += step) {
            draw(x, y, step, step);
        }
    }
}

startDrawTiledLines();
