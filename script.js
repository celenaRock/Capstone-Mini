//Documentation: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

//How this works: Event = "drag", Event handler = "ondrag", Fires When = dragging interactivity on browser

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
    const id = event.dataTransfer.getData('text',)
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

//what happens when letting go of drag object
function onDragEnd(event) {
    event.target.style.opacity = 1
}
//once entering the dropzone area
function onDragEnter(event) {
    // event.target.style.background = '#eee' ;
    console.log("you have entered the drop zone")
}
