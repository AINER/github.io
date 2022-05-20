//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Богатство океана';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ocean.png') {
      myImage.setAttribute ('src','images/water.png');
    } else {
      myImage.setAttribute ('src','images/ocean.png');
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Богатство океана - это интересно, ' + myName;
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Богатство океана – это интересно, ' + storedName;
}
  
myButton.onclick = function() {
    setUserName();
  }
