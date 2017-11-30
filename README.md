# Parallax Scrool

Use a parallax scroll to move a background-image, and text at speed you can adjust

## Getting Started

Copy code & adjust it to your needs

### Change IDs

These id's are the default IDs called by the javascript code.
Change these to the names you desire.
Or add more Ids underneath.

```

//Header IDs are coded in page 
var featuredImage = document.getElementById('mole-featured-image-id');
var centerTextBox = document.getElementById('mole-header-div');

```

### Change Speed of Scroll

Adjust the speed you want each object to move when scrolling.
Value .1 is 10% speed.

```
//function changes style
var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
featuredImage.style.marginTop = -scrolltop * .1 + 'px' // move featuredImage at 10% of scroll rate
centerTextBox.style.paddingTop = (scrolltop * .1) + 'px' // move centerTextBox at 10% of scroll rate

```


