let headerDiv = document.getElementById('headerDiv')
let button = document.getElementById('buttonPop')
let modal = document.getElementById('modal-con')
let modalHeader=document.getElementById('modal-header')

let userName = "Kiritchell"
let greeting = ["Hello", " Bonjour", " こんにちは" ]

headerDiv.textContent = `${greeting}  ${userName}!`
button.textContent = "Click it boi"
modalHeader.textContent = "You activated my trap card!"

function popUp(){
    console.log("clicked")
};

button.addEventListener('click',
function removeClass(){
    modal.classList.remove('hidden');
    }
);

button.addEventListener('dblclick',
function removeClass(){
    modal.classList.add('hidden');
    }
);
