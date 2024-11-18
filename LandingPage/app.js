const menu = document.getElementById('menu');
const person = document.getElementById('person');
const sideBar = document.querySelector('.sideBar');
const closeSideBar = document.querySelector('.sideBar p');
const nav = document.getElementById('nav');
const log = document.getElementById('log');
const logClick = document.querySelector('.sideBar .account p span');


logClick.addEventListener('click', handleLog);

menu.addEventListener('click', showSideBar);
closeSideBar.addEventListener('click', hideSideBar);

function showSideBar(){
    sideBar.classList.toggle('showSideBar');
    nav.classList.toggle('hideNav');
}
function hideSideBar(){
    sideBar.classList.toggle('showSideBar');
    nav.classList.toggle('hideNav');
}

function handleLog(){
    if(log.textContent === "logIn"){
        log.textContent = "logOut";
    }
    else{
        log.textContent = "logIn";
    }
}