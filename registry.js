const registry = {}

function renderRoot(rootElement, state) {
  const updatedRootElement = rootElement.cloneNode(true);
  const childComponents = updatedRootElement.querySelectorAll('[data-component]')
  for (let childElement of childComponents) {
    const componentName = childElement.dataset.component;
    const componentRenderFunction = registry[componentName];
    const updatedChildElement = componentRenderFunction(childElement, state);
    const updatedChildElement2 = renderRoot(updatedChildElement, state);
    childElement.replaceWith(updatedChildElement2)
  }
  return updatedRootElement;
}
function add(name, componentRenderFunction) {
    registry[name] = componentRenderFunction;
  }
  
  export { add, renderRoot }