
export default function counterView(model) {
    const counter = document.querySelector('[data-component="counter"]');
    counter.innerHTML = `<div class="info">Antall trekk: ${model.count}</div>`;
    
}
