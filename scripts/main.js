const myHeading = document.querySelector('h1');

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    myHeading.textContent = 'Chocolate is my favorite ice cream flavor';
} else {
    myHeading.textContent = 'I like vanilla';
}

// click event listener
const clickButton = document.querySelector("p")
clickButton.addEventListener('click', () => {
    alert('Ouch! Stop poking me!');
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/hey.png') {
        myImage.setAttribute('src', 'images/bei.png');
    } else {
        myImage.setAttribute('src', 'images/hey.png');
    }
};

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = () => {
    setUserName();
  };


// myHeading.textContent = 'Hello world!';

// create a endless while loop that changes text color every 1 second
// while (true) {
//     myHeading.style.color = 'red';
//     setTimeout(() => {
//         myHeading.style.color = 'blue';
//     }, 1000);
//     }