document.body.style.backgroundColor = '#181A1B';
cells_x =9;
cells_y = 9;
mine_count = 10;
cell_size = 25;


let mine_grid;
let numerical_grid;
let gameplay_grid;
let board;
let board_cells;
let mouse_coords = { x: null, y: null };
let isMouseDown = false;
let visited_grid;
let bv3_grid;
let bv3;
let solved_bv3;
let click_action_count;
let ioe;
let ready_to_render;
let max_board_attempts = 10000;
let min_bv3;
let max_bv3;

// Just mine locations, 0 - Safe    1 - Mine
function set_random_mines_grid() {
    mine_count = Math.min((cells_x * cells_y) - 1, mine_count);
    mine_grid = Array.from({ length: cells_y }, () => Array(cells_x).fill(0));
    const availableCells = [];
    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            availableCells.push({ x, y });
        }
    }
    for (let i = 0; i < mine_count; i++) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const { x, y } = availableCells[randomIndex];
        mine_grid[y][x] = 1;
        availableCells.splice(randomIndex, 1);
    }
} 

// Underlying numerical grid, -1: Mine,    otherwise: adjecent minecount
function set_numerical_grid() {
    numerical_grid = mine_grid.map(row => row.slice());    
    for (let row = 0; row < cells_y; row++) {
        for (let col = 0; col < cells_x; col++) {
            if (numerical_grid[row][col] === 1) {
                numerical_grid[row][col] = -1;
            }
        }
    }  
    for (let row = 0; row < cells_y; row++) {
        for (let col = 0; col < cells_x; col++) {
            if (numerical_grid[row][col] === 0) {
                let mineCount = 0;
                for (let r = row - 1; r <= row + 1; r++) {
                    for (let c = col - 1; c <= col + 1; c++) {
                        if (r >= 0 && r < cells_y && c >= 0 && c < cells_x) {
                            if (numerical_grid[r][c] === -1) {
                                mineCount++;
                            }
                        }
                    }
                }
                numerical_grid[row][col] = mineCount;
            }
        }
    }
}

// State relevant to gameplay: 0 - Closed cell   1 - Opened cell  2 - Flag
function set_gameplay_grid() {
    gameplay_grid = Array.from({ length: cells_y }, () => Array(cells_x).fill(0));
}

// set upt the grid html element one time
function make_board() {
    board = document.getElementById('board');
    board.innerHTML = '';

    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${cells_x}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${cells_y}, 1fr)`;
    board.style.maxWidth = `${cell_size * cells_x}px`;
    board_cells = Array.from({ length: cells_y }, () => Array(cells_x).fill(null));

    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.onselectstart = () => false;
            board_cells[y][x] = cell;
            board.appendChild(cell);
        }
    }
}


// TODO: fancy thing about making certain cells invisible when highlighted (around numbers)
function get_texture_from_coord(y, x) {
    let gp = gameplay_grid[y][x];
    let nm = numerical_grid[y][x];

    if (gp === 0) { //if the cell is closed
        if (isMouseDown && mouse_coords.x==x && mouse_coords.y==y){
            return "0.png";
        } else {
            return "closed.png";
        }
    }


    if (gp === 1) {
        if (nm === -1) {
            return "mine_blasted.png";
        } else {
            return `${nm}.png`;
        }
    }
        
    if (gp === 2) return "flag.png";

}



function update_board() {
    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            const cell = board_cells[y][x];
            const texture = 'textures/' + get_texture_from_coord(y, x);
            if (cell.dataset.texture !== texture) {
                cell.style.backgroundPosition = 'center';
                cell.style.backgroundSize = '105% 105%';
                cell.style.backgroundImage = `url(${texture})`;
            }
        }
    }
    solved_bv3 = get_solved_3bv();
    if (click_action_count < 1 ) {
        ioe = 1.00;
    } else {ioe = solved_bv3/click_action_count;}
    ioe = Math.round(ioe * 100) / 100;
    update_text();
}

function click_action(y, x, actionType) {
    if (x === null) {
        return;
    }
    if (actionType === 0) { // Left click action
        switch (gameplay_grid[y][x]) {
            case 0: // if cell is closed (and not flagged)
                gameplay_grid[y][x] = 1; // cell becomes open
                if (numerical_grid[y][x] == 0) {
                    initialize_visited_grid();
                    zero_open(y, x);
                }
                break;

            case 1: // if cell is open
                if (mine_grid[y][x] === 1) { // if it's a mine, clicking it again closes it
                    gameplay_grid[y][x] = 0;
                    click_action_count-=2;
                }
                chord(y, x);
                break;
        }
    } else if (actionType === 2) { // Right click action
        switch (gameplay_grid[y][x]) {
            case 0: // if cell is closed (and not flagged)
                gameplay_grid[y][x] = 2; // becomes flagged
                break;

            case 2: // if cell is flagged
                gameplay_grid[y][x] = 0; // open
                break;
        }
    }
    click_action_count++;
    update_board();

}




////////////////////////////////////////////////////////////////////////////////////////

// BOARD REFRESH
function refresh_board() {
    [cells_x, cells_y, mine_count] = readBoardSize();
    [min_bv3, max_bv3] = readBV3Range();
    ready_to_render = false;
    let ready = false
    let attempts = 0; 
    while (ready!=true && attempts < max_board_attempts){
        set_random_mines_grid();
        set_numerical_grid();
        set_gameplay_grid();
        set_3bv_grid();
        click_action_count = 0;
        if (bv3 >= min_bv3 && bv3 <= max_bv3){
            ready = true;
        }
        attempts++;
    }
    make_board();
    ready_to_render=true;
    update_board();
    
}
refresh_board();






/////////////////////////////////////////


function mouse_position_to_grid_coordinate(mouseX, mouseY) {
    
    const rect = board.getBoundingClientRect();
    const relativeX = mouseX - rect.left;
    const relativeY = mouseY - rect.top;

    if (relativeX < 0 || relativeY < 0 || relativeX >= rect.width || relativeY >= rect.height) {
        return null;
    }

    const x = Math.floor(relativeX / cell_size);
    const y = Math.floor(relativeY / cell_size);

    if (x >= 0 && x < cells_x && y >= 0 && y < cells_y) {
        return { x, y };
    }

    return null;
}



function updateMouseCoords() {
    document.addEventListener('mousemove', (event) => {
        const coords = mouse_position_to_grid_coordinate(event.clientX, event.clientY);
        if (coords) {
            mouse_coords.x = coords.x;
            mouse_coords.y = coords.y;
        } else {
            mouse_coords.x = null;
            mouse_coords.y = null;
        }
    });
}


document.addEventListener('mousedown', (event) => {
    if (event.button === 0) { 
        isMouseDown = true;
    }
});

document.addEventListener('mouseup', (event) => {
    if (event.button === 0) { 
        isMouseDown = false;
    }
});

// is mouse cursor over an opened number
function mouseOnNumber() {
    if (mouse_coords.x == null) {
        return false;
    }

    const is_open = gameplay_grid[mouse_coords.y][mouse_coords.x] == 1;
    const is_number = numerical_grid[mouse_coords.y][mouse_coords.x] >= 1 && numerical_grid[mouse_coords.y][mouse_coords.x] <= 8;

    return is_open && is_number;
}


function loop() {
    if (ready_to_render===true){
        update_board();
    }

    requestAnimationFrame(loop);
}

updateMouseCoords();
requestAnimationFrame(loop)

document.addEventListener('mouseup', (event) => {
       click_action(mouse_coords.y,mouse_coords.x,event.button);
    }
);



function initialize_visited_grid() {
    visited_grid = Array.from({ length: cells_y }, () => Array(cells_x).fill(false));
}

function zero_open(y, x) {
    if (visited_grid[y][x]) return;

    visited_grid[y][x] = true;

    gameplay_grid[y][x] = 1;

    if (numerical_grid[y][x] !== 0) return;

    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;

            if (ny >= 0 && ny < cells_y && nx >= 0 && nx < cells_x) {
                if (!visited_grid[ny][nx] && gameplay_grid[ny][nx]  != 1) {
                    zero_open(ny, nx);
                }
            }
        }
    }
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

function chord(y, x) {
    const number = numerical_grid[y][x];
    if (number === -1 || number === 0) return; 


    let flagCount = 0;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;

            if (ny >= 0 && ny < cells_y && nx >= 0 && nx < cells_x) {
                if (gameplay_grid[ny][nx] === 2) {
                    flagCount++;
                }
            }
        }
    }

 if (flagCount === number) {
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                const ny = y + dy;
                const nx = x + dx;
                if (ny >= 0 && ny < cells_y && nx >= 0 && nx < cells_x) {
                    if (gameplay_grid[ny][nx] === 0 && gameplay_grid[ny][nx] !== 2) {
                        gameplay_grid[ny][nx] = 1; 
                        if (numerical_grid[ny][nx]==0){
                            zero_open(ny,nx);
                        }
                    }
                }
            }
        }
    }
}


// 1 for every cell on the board that contriubutes to 3bv
// note: only 1 cell can, and should be marked in each opening
//numbered cells on the boarders of the openings are NOT 3bv: 0
function set_3bv_grid() {
    const visited = Array.from({ length: cells_y }, () => Array(cells_x).fill(false));
    const isOpening = (y, x) => numerical_grid[y][x] === 0 && !visited[y][x];

    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    bv3_grid = Array.from({ length: cells_y }, () => Array(cells_x).fill(0));
    bv3 = 0;

    function exploreOpening(y, x) {
        const stack = [[y, x]];
        visited[y][x] = true;

        while (stack.length > 0) {
            const [cy, cx] = stack.pop();

            for (const [dy, dx] of directions) {
                const ny = cy + dy;
                const nx = cx + dx;

                if (ny >= 0 && ny < cells_y && nx >= 0 && nx < cells_x) {
                    if (!visited[ny][nx]) {
                        visited[ny][nx] = true;

                        if (numerical_grid[ny][nx] === 0) {
                            stack.push([ny, nx]);
                        }
                    }
                }
            }
        }
    }

    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            if (isOpening(y, x)) {
                bv3_grid[y][x] = 1;
                exploreOpening(y, x);
            }
        }
    }

    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            if (!visited[y][x] && numerical_grid[y][x] >= 0) {
                bv3_grid[y][x] = 1;
            }
        }
    }

    
    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            if (bv3_grid[y][x] === 1) {
                bv3++
            }
        }
    }
}

function get_solved_3bv() {
    let solvedCount = 0;

    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            if (bv3_grid[y][x] === 1 && gameplay_grid[y][x] === 1) {
                solvedCount++;
            }
        }
    }

    return solvedCount;
}

function update_text() {
    const bbbv3_text = document.getElementById('3bv-text');
    bbbv3_text.textContent = `3BV: ${solved_bv3}/${bv3}`;
    const ca_text= document.getElementById('ca-text');
    ca_text.textContent = `Clicks: ${click_action_count}`;
    const eff_text= document.getElementById('eff-text');
    eff_text.textContent = `IOE: ${ioe}`;
}

function open_all_openings() {
    for (let y = 0; y < numerical_grid.length; y++) {
        for (let x = 0; x < numerical_grid[y].length; x++) {
            if (numerical_grid[y][x] === 0 && gameplay_grid[y][x] === 0) {
                click_action(y, x, 0);
            }
        }
    }
    update_board();
}

function open_board(){
    for (let y = 0; y < numerical_grid.length; y++) {
        for (let x = 0; x < numerical_grid[y].length; x++) {
            gameplay_grid[y][x] = 1;
            if (mine_grid[y][x] ===1){
                gameplay_grid[y][x] = 2;
            }

        }
    }
    click_action_count = bv3;
    update_board();
}

function close_board(){
    for (let y = 0; y < numerical_grid.length; y++) {
        for (let x = 0; x < numerical_grid[y].length; x++) {
            gameplay_grid[y][x] = 0;
        }
    }
    click_action_count = 0;
    update_board();
}
document.getElementById('all-openings-btn').addEventListener('click', open_all_openings);
document.getElementById('reset-btn').addEventListener('click', refresh_board);
document.getElementById('open-board-btn').addEventListener('click', open_board);
document.getElementById('close-board-btn').addEventListener('click', close_board);
document.getElementById('share-btn').addEventListener('click', handle_codes);



function readBoardSize() {
    const input = document.getElementById("board-size-in").value;
    const defaultValues = [16, 16, 40];
    const parsedValues = input.split(",").map(Number);

    if (
        parsedValues.length === 3 &&
        parsedValues.every(value => Number.isInteger(value) && value >= 0)
    ) {
        const width = Math.min(parsedValues[0], 30);
        const height = Math.min(parsedValues[1], 99);
        const mineCount = parsedValues[2];

        cells_x = width;
        cells_y = height;
        mine_count = mineCount;
        return [width, height, mineCount]; 
    }
    cells_x = defaultValues[0];
    cells_y = defaultValues[1];
    mine_count = defaultValues[2];
    return defaultValues; 
}

function readBV3Range() {
    const input = document.getElementById("bv3-range-in").value;
    const defaultValues = [1, 1000];
    const parsedValues = input.split(",").map(Number);
    if (
        parsedValues.length === 2 &&
        parsedValues.every(value => Number.isInteger(value) && value >= 0) &&
        parsedValues[0] <= parsedValues[1]
    ) {
        return parsedValues;
    }

    return defaultValues; 
}

document.addEventListener("keydown", function(event) {
    if (event.key === "r" || event.key === "R") { 
        refresh_board(); 
    }
    if (event.key === "t" || event.key === "T") { 
        open_all_openings(); 
    }
    if (event.key === "c" || event.key === "C") { 
        close_board(); 
    }
    if (event.key === "v" || event.key === "V") { 
        open_board(); 
    }
    if (event.key === "m" || event.key === "M") { 
        toggle_mine(mouse_coords.y,mouse_coords.x);
    }
});

function toggle_mine(y, x) {
    if (x === null) {
        return;
    }
    open_board();
    mine_grid[y][x] = 1-mine_grid[y][x];
    gameplay_grid[y][x] = mine_grid[y][x]+1;
    set_numerical_grid();
    set_3bv_grid()
    update_board();
}


function exportToCode() {
    const mineString = mine_grid.flat().join(""); 
    return `${cells_x}/${cells_y}/${mineString}`;
}

function importFromCode(code) {
    const [width, height, mineString] = code.split("/").map((item, index) => 
        index < 2 ? parseInt(item) : item
    );

    if (!width || !height || !mineString || mineString.length !== width * height) {
        console.error("Invalid code format");
        return;
    }
    cells_x = width;
    cells_y = height;
    console.log(cells_x);
    mine_grid = [];
    for (let y = 0; y < cells_y; y++) {
        const row = mineString.slice(y * cells_x, (y + 1) * cells_x).split("").map(Number);
        mine_grid.push(row);
    }
    // Should really be one function, was refresh_board but decided to corrupt that.
    set_numerical_grid();
    set_gameplay_grid();
    set_3bv_grid();
    make_board();
    close_board();
    update_board();
}

function handle_codes() {
    const currentCode = exportToCode();
    const userCode = prompt("Your code: (Paste code here to import)", currentCode);
    importFromCode(userCode);
}