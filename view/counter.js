
export function counterView(model) {
    const counter = document.querySelector('.shuffle-counter');
    counter.innerHTML = `<div class="info">Antall trekk: ${model.count}</div>`;
    
}
