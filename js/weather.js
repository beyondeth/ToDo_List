
const API_KEY = "95438530e0d01ace27c2530e948635df";

// --------------- Functoins ---------------
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather    = document.querySelector("#weather span");
        weather.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp}°C`;

    
    });
}

function onGeoError(){
    alert("gps navigation failed");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);


/*

function onGeoOk(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

   fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
    
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  
//getCurrentPosition 은 2개의 argument가 필요함//
//정상작동할때의 함수와 에러가 발생했을 떄의 함수//

//https://api.openweathermap.org/data/2.5/weather?lat=36.7919104&lon=127.8509056&appid=95438530e0d01ace27c2530e948635df&units=metric//

*/