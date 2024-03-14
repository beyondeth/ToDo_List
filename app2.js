//const hellos = document.getElementsByClassName("hello");




/*const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("WIFE iS GOOD")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

*/

/*const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {

    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === "blue"){
        newColor = "tomato";
    }
    else {
        newColor = "blue";
    }

        h1.style.color = newColor;

    //console.log(h1.style.color);
    //h1.style.color = "blue";
    //console.log(h1.style.color);
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

h1.addEventListener("click", handleTitleClick);

*/

/*const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    

    h1.classList.toggle("clicked");

    /*if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }

    else {
        h1.classList.add(clickedClass);
    }
    
}

h1.addEventListener("click", handleTitleClick);



-------------------------------------------------------------------
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    //greeting.innerText = "Hello " + username;//
    
    paintGreetings(savedUsername);

    }


function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // show the greeting
  paintGreetings(savedUsername);

} 
-------------------------------------------------------------------
*/










