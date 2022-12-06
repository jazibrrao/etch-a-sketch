const grid = document.querySelector('#grid');

// create 16x16 grid of divs 
// create divs with javascript

function createGrid() {
    //# of rows & columns to create grid
    const rowCount = 16;
    const columnCount = 16;

    //create one row of squares
    function createGridRow() {
        const row = document.createElement('div');
        row.classList = ('row');
        for(let i=0; i < columnCount; i++) {
            const square = document.createElement('div');
            square.classList = ('square');
            row.append(square);
        }
        grid.append(row);
    }

    for(let i=0; i < rowCount; i++) {
        createGridRow();
    }
}

createGrid();