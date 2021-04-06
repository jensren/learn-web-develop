

var myImage = document.querySelector('.my-image');

fetch('flowers.jpg').then(function(response) {
  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});

