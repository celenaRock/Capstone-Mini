const { ConnectionError } = require("sequelize/types");

const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener()

//Documentation: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

//How this works: Event = "drag", Event handler = "ondrag", Fires When = dragging interactivity on browser

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






//sets up item to be dragged
function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
//changes color once selected
    event.currentTarget.style.backgroundColor = 'yellow';
    event.target.style.opacity = 0.75;
    console.log("dragging")
    const img = new Image();
    img.src = 'ponies/rainbowpony.png'; ////////////////////////////////******** */
    event.dataTransfer.setDragImage(img, 10, 10);
}

//to accept the release of drop
function onDragOver(event) {
    event.preventDefault();
}

//once dropped
function onDrop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text')
//element to be dropped(by id)
    const draggableElement = document.getElementById(id);
//select the drop zone element
    const dropzone = event.target;
//adding the draggable element to the dropzone
    dropzone.appendChild(draggableElement);
//after dataTransfer it should reset 
    event.dataTransfer.clearData();    
//reset to previous state
    event.target.style.background = "";       
//After a long-winded function, Now it drops!
    console.log("dropped")
}



//further experimentation
function ondragleave(event) {
    event.dataTransfer.setDragImage(img, 10, 10);
}

//what happens when letting go of drag object
function onDragEnd(event) {
    event.target.style.opacity = 1
}
//once entering the dropzone area
function onDragEnter(event) {
    event.target.style.opacity = .5 ;
    console.log("you have entered the drop zone")
}
