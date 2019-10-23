let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/deezer.png') {
      myImage.setAttribute ('src','images/colors.jpg');
    } else {
      myImage.setAttribute ('src','images/deezer.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Deezer Rocks, ' + myName;
    }
  }
if(localStorage.getItem('name')) {
setUserName();
} else {
    let storedName =  localStorage.getItem('name');
    myHeading.textContent = 'Deezer Rocks, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}