var canvas = document.getElementById("canvas");
var refreshBtn = document.getElementById("refresh");
var redBtn = document.getElementById("red");
var blackBtn = document.getElementById("black");
var parent = canvas.parentElement;
redBtn.classList.add("active");
var board = new Board(6, 7, 4);
var bot = new Bot(7);
var color = Board.RED;
var botPlay; 
canvas.width = parent.offsetWidth;
if (canvas.width > 700) {
    canvas.width = 700;
}
canvas.height = canvas.width * (board.getRows()/board.getColumns());
var gui = new BoardGUI(canvas);
var mouse = {
    x: undefined,
    y: undefined
};
gui.drawBoard(board);     

//EVENTS---------------------------------------------
canvas.addEventListener("mousemove", function (e) {
    if (!board.isOver() && color === board.getCurrentPlayer()) {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
        gui.highlightBoard(board, mouse);
    }
});

canvas.addEventListener("mouseout", function(e) {
    if (!board.isOver() && color === board.getCurrentPlayer()) {
        mouse.x = undefined;
        mouse.y = undefined;
        gui.highlightBoard(board, mouse);
    }
});

canvas.addEventListener("click", function(e) {
    if (!board.isOver() && color === board.getCurrentPlayer()) {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
        var column = gui.getClickedColumn(board, mouse);
        if (column >= 0 && column < board.getColumns()) {
            board.playColumn(column);
            gui.drawBoard(board);
            startPlay();
        }
    }
});

refreshBtn.addEventListener("click", function () {
    newGame();
    if (color === Board.BLACK) {
        startPlay();
    }
});

redBtn.addEventListener("click", function() {
    newGame();
    blackBtn.classList.remove("active");
    this.classList.add("active");
    color = Board.RED;
});

blackBtn.addEventListener("click", function() {
    newGame();
    redBtn.classList.remove("active");
    this.classList.add("active");
    color = Board.BLACK;
    startPlay();
});

window.addEventListener("resize", function() {
    canvas.width = parent.offsetWidth;
    if (canvas.width > 700) {
        canvas.width = 700;
    }
    canvas.height = canvas.width * (board.getRows()/board.getColumns());
    gui.update(canvas);
    gui.drawBoard(board);
});

function newGame() {
    stopPlay();
    board.clear();
    gui.drawBoard(board);
}

function startPlay() {
    botPlay = setTimeout(function () {
        var column = bot.getMove(board);
        board.playColumn(column);
        gui.drawBoard(board);
    }, 1000);
}

function stopPlay() {
    clearTimeout(botPlay);
}