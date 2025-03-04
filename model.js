
const model = {
    numbers: [3, 5, 6, 8, 1, null, 2, 4, 7],
    count: 0
};


export function clickedNumber(index,updateView) {
    
    model.count++;
    let blankIndex = findBlankIndex(index);
   
    if (blankIndex == null) return;
    model.numbers[blankIndex] = model.numbers[index];
    model.numbers[index] = null;
    updateView();
}


function findBlankIndex(index) {
    for (let delta of [-3, -1, 1, 3]) {
        let newIndex = index + delta;
        if (newIndex < 0 || newIndex >= model.numbers.length) continue;
        if (model.numbers[newIndex] == null) {
            return newIndex;
        }
    }
    return null;
}

export default model;