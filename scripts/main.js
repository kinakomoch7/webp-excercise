let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}



function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
    }
  }
  
  myButton.onclick = () => {
    setUserName();
  }
  