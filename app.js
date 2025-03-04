import model, { clickedNumber } from './model.js';
import  gridView  from './view/grid.js';
import  counterView  from './view/counter.js';


function updateView() {
   
    gridView(model, clickedNumber,updateView); 
    counterView(model); 
}


updateView();