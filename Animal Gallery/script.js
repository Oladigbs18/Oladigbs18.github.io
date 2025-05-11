//to display the image in the preview when an image is hovered
function showImage(preview) {
    document.getElementById("gallery").style.backgroundImage = 'url('+ preview.src + ')';
    document.getElementById("gallery").innerHTML = preview.alt;
}
//to remove the image in the preview when the mouse is not hovering
function hideImage() {
    document.getElementById("gallery").style.backgroundImage = 'url()';
    document.getElementById("gallery").innerHTML = 'Hover over an Image to Display Here';
}