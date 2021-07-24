const canvas = document.getElementById("jsCanvas"); // jsCanvas를 가져와서 canvas에 집어넣는 거
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
let painting = false;

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
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
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// console.log(Array.from(colors))
Array.from(colors).forEach(color => color.addEventListener("click",  handleColorClick))