//demo.js

Module.onRuntimeInitialized = () => { start(); }

/* ******************** global variables ******************** */

var canvas = document.getElementById('canvas');

var size;
let g = null;
var rows;
var cols;

const EMPTY = 0;      // empty shape
const ENDPOINT = 1;   // endpoint shape
const SEGMENT = 2;    // segment shape
const CORNER = 3;     // corner shape
const TEE = 4;        // tee shape
const CROSS = 5;      // cross shape
const NB_SHAPES = 6;  // nb of shapes

const NORTH = 0;      // north
const EAST = 1;       // east
const SOUTH = 2;      // south
const WEST = 3;       // west 
const NB_DIRS = 4;    // nb of directions

let _img = [
    "empty.png",
    "endpoint.png",
    "segment.png",
    "corner.png",
    "tee.png",
    "cross.png"
].map(filename => {
    let img = new Image();
    img.src = `src/ressources/textures/pieces/${filename}`;
    return img;
});

let background = new Image();
background.src = `src/ressources/textures/backgroundv2.png`;

/* ******************** register events ******************** */

canvas.addEventListener('click', canvasLeftClick);        // left click event
canvas.addEventListener('contextmenu', canvasRightClick); // right click event

/* ******************** event callback ******************** */

function canvasLeftClick(event) {
    event.preventDefault(); // prevent default context menu to appear...
    // get relative cursor position in canvas
    if (!Module._won(g)){
        let posX = Math.floor(event.offsetX / size);
        let posY = Math.floor(event.offsetY / size);
        Module._play_move(g,posY,posX,1);
        drawCanvas();
    }
}

function canvasRightClick(event) {
    event.preventDefault(); // prevent default context menu to appear...
    // get relative cursor position in canvas
    if (!Module._won(g)){
        let posX = Math.floor(event.offsetX / size);
        let posY = Math.floor(event.offsetY / size);
        Module._play_move(g,posY,posX,-1);
        drawCanvas();
    }
}

function start() {
    newgame();
}

/* ******************** canvas drawing ******************** */
function drawRotatedImage(ctx, image, x, y, size, angleDegrees) {
    var angle = angleDegrees * Math.PI / 180;
    ctx.save();
    ctx.translate(x + size / 2, y + size / 2);
    ctx.rotate(angle);
    ctx.drawImage(image, -size / 2, -size / 2, size, size);
    ctx.restore();
}

function drawCanvas() {
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;

    // clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(background, 0,0 , width, height);
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (Module._get_piece_shape(g, row, col) != EMPTY){
                drawRotatedImage(ctx, _img[Module._get_piece_shape(g, row, col)],col*size, row*size, size, Module._get_piece_orientation(g, row, col) * 90);
            } else {
                ctx.drawImage(_img[EMPTY],col*size, row*size, size, size);
                ctx.restore();
            }
        }
    }
    if (Module._won(g)){
        ctx.save();
        ctx.font = 'bold 20px Arial';
    ctx.fillStyle = 'yellow';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText("Congratulation, you won!", width / 2, height / 2);
    ctx.restore();
    }
}

// Buttons 

function undo(){
    if (!Module._won(g)){
        Module._undo(g);
        drawCanvas();
    }
}

function redo(){
    if (!Module._won(g)){
        Module._redo(g);
        drawCanvas();
    }
}

function shuffle(){
    Module._restart(g);
    drawCanvas();
}

function newgame(){
    if (g != null) Module._delete(g);
    g = Module._new_default();
    rows = Module._nb_rows(g);
    cols = Module._nb_cols(g);
    if(window.innerHeight < window.innerWidth){
        size = window.innerHeight/2/cols;
    }
    else{
        size = window.innerHeight/2/rows;
    }
    canvas.width = size * cols;
    canvas.height = size * rows;
    drawCanvas();
}

function newgamecustom(){
    if (g != null) Module._delete(g);
    var wrapping = -1,empty = -1,extra = -1;
    cols = 0;
    rows = 0;
    do{
        rows = parseInt(prompt("Enter the number of rows :", "10"),10);
    } while (rows < 1);
    do{
        cols = parseInt(prompt("Enter the number of cols :", "10"),10);
    } while (cols < 1);
    do{
        wrapping = parseInt(prompt("Is the game wrapping ? True = 1, False = 0", "0"),10);
    } while (wrapping !=0 && wrapping != 1);
    do{
        var nb_possible = rows * cols - 2;
        empty = parseInt(prompt("Enter the number of empty pieces (<" + (nb_possible+1) + ") :", 0),10);
    } while ( nb_possible < empty && empty != 0);
    do{
        // maths explained in game_tools.c
        if (wrapping) {
            var nb_hedge_possible = (rows * col - empty) * 4;
        } else {
            var nb_hedge_possible = ((rows - 2) * 2 + (cols - 2) * 2) * 3 + 4 * 2 +
                                (rows - 2) * (cols - 2) * 4 - empty * 4;
        }
        var nb_possible = (nb_hedge_possible - (rows * cols - empty - 1) * 2)/ 2;
        if (nb_possible < 0) nb_possible = 0;
        extra = parseInt(prompt("Enter the number of loops (<" + (nb_possible+1) + ") :", 0 ),10);
    } while (nb_possible < extra && extra != 0);

    if(window.innerHeight < window.innerWidth){
        size = window.innerHeight/2/cols;
    }
    else{
        size = window.innerHeight/2/rows;
    }
    if(size < 50){
        size = 50;
    }
    g = Module._new_random(rows,cols,wrapping,empty,extra);
    Module._restart(g);
    canvas.width = size * cols;
    canvas.height = size * rows;
    drawCanvas();
}

function solve(){
    if (!Module._won(g)){
        Module._solve(g);
        drawCanvas();
    }
}

// EOF
