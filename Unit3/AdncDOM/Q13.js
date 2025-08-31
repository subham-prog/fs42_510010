// Helper function to attach event listeners
function addListeners(element, name) {
  // Bubbling phase (default)
  element.addEventListener('click', () => {
    alert(`${name} clicked (bubbling)`);
  });

  // Capturing phase (useCapture = true)
  element.addEventListener('click', () => {
    alert(`${name} clicked (capturing)`);
  }, true);
}

// Add listeners to all divs
addListeners(document.getElementById('outer'), 'Outer Div');
addListeners(document.getElementById('middle'), 'Middle Div');
addListeners(document.getElementById('inner'), 'Inner Div');

// Add listeners to buttons
addListeners(document.getElementById('btnOuter'), 'Outer Button');
addListeners(document.getElementById('btnMiddle'), 'Middle Button');

// Inner button with stopPropagation
const btnInner = document.getElementById('btnInner');
btnInner.addEventListener('click', (e) => {
  alert('Inner Button clicked (bubbling, stops propagation)');
  e.stopPropagation(); // Stop event propagation
});

// Also capture phase for inner button (optional)
btnInner.addEventListener('click', (e) => {
  alert('Inner Button clicked (capturing)');
}, true);
