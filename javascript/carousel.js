
// javascript for edited image slider 

// variables
const carousel = document.querySelector(".carousel");
firstIMG = carousel.querySelectorAll(".carousel img")[0];
arrowIcons = document.querySelectorAll(".carousel-wrapper i");

// dragging
let isDragStart = false, prevPageX, prevScrollLeft; 
let firstImgWidth = firstIMG.clientWidth + 14;

// click on icon ()
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // move carousel when left icon is clicked
        carousel.scrollLeft += icon.id == "left-arrow" ? -firstImgWidth : firstImgWidth; 
    });
});

// drag carousel ()
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

// scrolling image ()
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let posistionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - posistionDiff;
}

const dragStop = () => {
    isDragStart = false; 
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

function isEmpty(dragStart){
    return (dragStart == null || dragStart.trim().length === 0);
  }
