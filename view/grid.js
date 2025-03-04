
export function gridView(model,clickedNumber,updateView) {
    const grid = document.querySelector('.grid-puzzle');
    grid.innerHTML = `
        <div class="grid">
            ${model.numbers.map((number, index) => `
                <div class="grid-item" data-index="${index}">
                    ${number === null ? '' : number}
                </div>
            `).join('')}
        </div>
    `;

   
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        item.addEventListener('click', () => clickedNumber(index,updateView));
        
    });

}