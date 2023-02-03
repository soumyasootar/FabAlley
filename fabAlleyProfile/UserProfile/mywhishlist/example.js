// Create the div element
const div = document.createElement('div');

// Create the image element
const img = document.createElement('img');
img.src = 'path/to/image.jpg';

// Create the text element
const text = document.createTextNode('Some text');

// Add the image and text to the div element
div.appendChild(img);
div.appendChild(text);

// Add the div element to the HTML page
document.body.appendChild(div);
