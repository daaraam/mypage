const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const NAME_KEY = '이름';

function onLoginBtnClick() {
    const userName = loginInput.value;
    if(userName === ""){
        alert('plz write your name!');
    } else if (userName.length >=15) {
        alert('your name is too long!');
    }
}

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(userName);
    greeting.innerText = `hello ${userName}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    localStorage.setItem(NAME_KEY,userName)
}
loginForm.addEventListener("submit",onLoginSubmit)

function paintGreetings(name) {
    greeting.innerText = `hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(NAME_KEY)

if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
} else {
    paintGreetings(saveUserName);
}