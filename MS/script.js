document.body.style.backgroundColor = '#181A1B';
cells_x =9;
cells_y = 8;
mine_count = 14;
cell_size = 50;


let mine_grid;
let numerical_grid;
let gameplay_grid;
let board;
let board_cells;
let mouse_coords = { x: null, y: null };
let isMouseDown = false;
let visited_grid;

// Just mine locations, 0 - Safe    1 - Mine
function set_random_mines_grid() {
    mine_count = Math.min((cells_x*cells_y)-1,mine_count);
    mine_grid = Array.from({ length: cells_y }, () => Array(cells_x).fill(0));
    const cellIndices = new Set();
    for (let i = 0; i < cells_x * cells_y; i++) {
        cellIndices.add(i);
    }

    for (let i = 0; i < mine_count; i++) {
        const chosenIndex = [...cellIndices][Math.floor(Math.random() * cellIndices.size)];
        const row = Math.floor(chosenIndex / cells_x);
        const col = chosenIndex % cells_y;
        mine_grid[row][col] = 1;
        cellIndices.delete(chosenIndex);
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
    board = document.getElementById('grid');

    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${cells_x}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${cells_y}, 1fr)`;
    board.style.maxWidth = `${cell_size * cells_x}px`;
    board_cells = Array.from({ length: cells_y }, () => Array(cells_x).fill(null));

    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = `${y},${x}`;
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
            return "mine.png";
        } else {
            return `${nm}.png`;
        }
    }
        
    if (gp === 2) return "flag.png";

}

// render the board state from state arrays
function update_board() {
    for (let y = 0; y < cells_y; y++) {
        for (let x = 0; x < cells_x; x++) {
            const cell = board_cells[y][x];
            cell.textContent = `${y}`;
            const img = document.createElement('img');
            const texture = 'textures/' + get_texture_from_coord(y, x);
            img.src = texture;
            img.style.width = '100%';
            img.style.height = '100%';
            img.ondragstart = () => false;
            img.onselectstart = () => false;
            
            cell.innerHTML = '';
            cell.appendChild(img);
        }
    }
}

function left_click_action(y, x) {
    switch (gameplay_grid[y][x]) {
        case 0: // if cell is closed (and not flagged)
            gameplay_grid[y][x] = 1; //cell becomes open
            if (numerical_grid[y][x]==0){
                initialize_visited_grid();
                zero_open(y,x);
            }
            break;

        case 1: // if cell is open
            if (mine_grid[y][x] === 1) { //if its a mine, clicking it again closes it
                gameplay_grid[y][x] = 0; 
            }
            break;
    }
    update_board();
    // highlightable and clickable and dragable
}

function right_click_action(y, x) {
    switch (gameplay_grid[y][x]) {
        case 0: // if cell is closed (and not flagged)
            gameplay_grid[y][x] = 2; //becomes flagged
            break;

        case 2: // if cell is flagged
            gameplay_grid[y][x] = 0; // open
            break;
    }
    update_board();
    // highlightable and clickable and dragable
}


////////////////////////////////////////////////////////////////////////////////////////
set_random_mines_grid();
set_numerical_grid();
set_gameplay_grid();
make_board();



console.log('Mine Grid:');
mine_grid.forEach(row => console.log(row));

console.log('Numerical Grid:');
numerical_grid.forEach(row => console.log(row));

console.log('Gameplay Grid:');
gameplay_grid.forEach(row => console.log(row));



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

document.addEventListener('mousedown', () => (isMouseDown = true));
document.addEventListener('mouseup', () => (isMouseDown = false));

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
    // Your code to run every frame goes here
    update_board()

    // Request the next frame
    requestAnimationFrame(loop);
}

updateMouseCoords();
requestAnimationFrame(loop)

document.addEventListener('mouseup', (event) => {
    if (event.button === 0) { 
       left_click_action(mouse_coords.y,mouse_coords.x);
    }
});


function initialize_visited_grid() {
    visited_grid = Array.from({ length: cells_y }, () => Array(cells_x).fill(false));
}

function zero_open(y, x) {
    if (visited_grid[y][x]) return; // Prevent re-running the function on visited cells

    // Mark this cell as visited
    visited_grid[y][x] = true;

    // Open the current cell
    gameplay_grid[y][x] = 1;

    // If the current cell is a number, don't open neighbors
    if (numerical_grid[y][x] !== 0) return;

    // Loop through the 8 neighbors (with edge/corner checks)
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;

            // Check if the neighbor is within bounds
            if (ny >= 0 && ny < cells_y && nx >= 0 && nx < cells_x) {
                // If the neighbor hasn't been visited yet and it's a zero, open it
                if (!visited_grid[ny][nx] && gameplay_grid[ny][nx] === 0) {
                    zero_open(ny, nx);
                }
            }
        }
    }
}