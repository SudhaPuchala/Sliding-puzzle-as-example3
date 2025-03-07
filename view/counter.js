


export default (targetElement, state) => {
    //1.clone
    const newCounter = targetElement.cloneNode(true)
    //2: update ut fra state
   newCounter.innerHTML = `<div class="info">Antall trekk: ${state.count}</div>`;
    //3:returnere klonet og oppdatert element
    return newCounter;
  }


