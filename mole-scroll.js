
 
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

//Header IDs are coded in page - not plugin ready
var featuredImage = document.getElementById('mole-featured-image-id');
var centerTextBox = document.getElementById('mole-header-div');


function parallaxbubbles(){
    //catch and return.
    if (featuredImage === null) return;
    if (centerTextBox === null) return;

    //function changes style
    var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
    featuredImage.style.marginTop = -scrolltop * .1 + 'px' // move featuredImage at 10% of scroll rate
    centerTextBox.style.paddingTop = (scrolltop * .1) + 'px' // move centerTextBox at 10% of scroll rate
}

//Event called on move
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
