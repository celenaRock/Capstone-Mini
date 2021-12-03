const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

//Documentation: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API


const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')


draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('drag start')
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', (event) => {
        event.preventDefault()
        const afterElement = getDragAfterElement(container, event.clientY)
        console.log(afterElement)
        console.log('drag over')
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
        container.appendChild(draggable)
        } else {container.insertBefore(draggable, afterElement)}
    })
})

function getDragAfterElement(container, y) {
   const draggableElements =[...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    console.log(box)
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
     } else {
            return closest
        }
    
   }, { offset: Number.POSITIVE_INFINITY }).element
}
// var container = document.getElementById("grid");
// var cell = document.createElement("div");
// cell.innerHTML = "TEXT";
// container.appendChild(cell);







var c = document.getElementById('gradient');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.06;
  window.requestAnimationFrame(run);
}

run();
