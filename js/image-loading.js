/* Asynchronous image loading experiment
Tutorial: https://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript
 */

// target the first image on page.

let image = document.images[0];

let downloadingImage = new Image();


downloadingImage.onload = function(){
    console.log("The image has loaded!");
    image.src = this.src;
};

downloadingImage.src ="img/dancing-house-hi-quality.jpg";
