
import  gridView  from './view/grid.js';
import  counterView  from './view/counter.js';
import {add, renderRoot} from './registry.js';


 
add('grid', gridView)
add('counter', counterView)



const state = {
  numbers: [11, 5, 6, 8, 1, null, 2, 4, 7],
  count: 12
};
  


window.requestAnimationFrame(() => {
  const main = document.querySelector('.game')
  const newMain = renderRoot(main, state)
  main.replaceWith(newMain)
});



