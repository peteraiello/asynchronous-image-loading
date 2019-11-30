/* Asynchronous image loading experiment
Tutorials:
Asynchonous image loading: https://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript
Understanding callback functions: https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
*/

// target the first image on page.

let image1 = document.getElementById("image1");
let downloadingImage = new Image();

function loadImg(){
    // stimulate a code delay
    setTimeout( function(){
      console.log('3 seconds is up!');
      image1.src = "img/dancing-house-hi-quality.jpg";
    }, 3000);
}

loadImg();
