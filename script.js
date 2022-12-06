const grid = document.querySelector('#grid');
const resetGridButton = document.querySelector('#resetGrid');
const canvasSize = 800;

function createGrid(rowCount, columnCount) {
    const squareWidth = canvasSize / columnCount;
    const squareLength = canvasSize / rowCount;

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
        let gridSquares = document.querySelectorAll("div.square"); // return NodeList
        let gridSquaresArray = [...gridSquares]; //convert NodeList into Array using spread syntax 
        gridSquaresArray.forEach(square => {
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareLength}px`;
        })
    }

    resetGridButton.addEventListener('click', () => {
        const rowCount = prompt('How many rows? (Max 100)');
        const columnCount = prompt('How many columns? (Max 100)');
        grid.innerHTML = '';
        createGrid(rowCount, columnCount);
    })
}

createGrid(16,16);
