
export default function (targetElement,state) {
//1.clone
const newElement = targetElement.cloneNode(true)
//2: update ut fra state
newElement.innerHTML = `
        <div class="grid">
            ${state.numbers.map((number, index) => `
                <div class="grid-item" data-index="${index}">
                    ${number === null ? '' : number}
                </div>
            `).join('')}
        </div>
    `;

    return newElement;
}

    
    

   
    


