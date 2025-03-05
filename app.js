import model, { clickedNumber } from './model.js';
import  gridView  from './view/grid.js';
import  counterView  from './view/counter.js';
import { add, renderRoot } from './registry.js'

add('grid', gridView)
add('counter', counterView)

const state = {
  grid: model,
  counter: model, 
  };

updateView();

window.requestAnimationFrame(() => {
  const main = document.querySelector('.game')
  const newMain = renderRoot(main, state)
  main.replaceWith(newMain)
});

function updateView() {
    gridView(model, clickedNumber,updateView); 
    counterView(model); 
}


