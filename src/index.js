import './css/style.css'
const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');

const showAmPm = true;

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    // const amPm = hour >= 12 ? 'PM' : 'AM';

    // hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    // ${showAmPm ? amPm : ''}
    setTimeout(showTime, 1000);
};

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();
    
    if (hour < 12) {
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
        greeting.textContent = 'Доброго ранку!';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
        greeting.textContent = 'Добрий день!';
    } else {
        document.body.style.backgroundImage = "url('./images/evening.jpg')";
        greeting.textContent = 'Добрий вечір!';
        document.body.style.color = 'white'
    };
};

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
        localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    };
};

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
        localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    };
};

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Ваше ім’я?]';
    } else {
        name.textContent = localStorage.getItem('name')
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[які плани?]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    };
};

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
setBgGreet();
getName();
getFocus();