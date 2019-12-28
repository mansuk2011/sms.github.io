let myImages = document.querySelectorAll('img');

myImages.forEach(function(myImage) {
    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/newyear1.jpg') {
          myImage.setAttribute ('src','images/newyear2.jpg');
        } else {
          myImage.setAttribute ('src','images/newyear1.jpg');
        }
    }
 });
