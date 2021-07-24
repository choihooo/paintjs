const canvas = document.getElementById("jsCanvas"); // jsCanvas를 가져와서 canvas에 집어넣는 거
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

let painting = false;
let filling = false;

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR; 
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 1.5;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event) {
    // console.log(event)
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y)
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    // console.log(event)
    painting = true;
}

// function onMouseUp(event){
//     // painting = false;
//     stopPainting();
// }

// function onMouseLeave(event){ 
//     painting = false;
// }

function handleColorClick(event){
    // console.log(event.target.style);
    const bgColor = event.target.style.backgroundColor;
    // console.log(bgColor);
    ctx.strokeStyle = bgColor;
    ctx.fillStyle = bgColor;
}

function handleRangeChange(event){
    // console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "FILL"
    }else{
        filling = true
        mode.innerText = "PAINT"
        // ctx.fillStyle = ctx.strokeStyle;
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

// console.log(Array.from(colors))
Array.from(colors).forEach(color => color.addEventListener("click",  handleColorClick))

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}