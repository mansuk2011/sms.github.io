function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let myImages = document.querySelectorAll('img');

myImages.forEach(function(myImage) {
    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/newyear1.jpg') {
          myImage.setAttribute ('src','images/newyear2.jpg');
        } else
          myImage.setAttribute ('src','images/newyear1.jpg');
        }
    }
 });


 function setUserName() {
    let myName = prompt('이름을 넣으세요.');

    if(!myName || myName === null) {
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Happy New Year!, ' + myName;
    }
  }

  /*
    if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Happy New Year!, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  */