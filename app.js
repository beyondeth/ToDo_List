const a = 10;
const b = 2;
let myName = "si hyung";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName);
console.log(myName + " JIJONE")

const amIFat = null;
console.log(amIFat);

let something;
console.log(something, amIFat);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the Array
daysOfWeek.push("sun");

console.log(daysOfWeek);

// objecj 

const player = {
    name: "sihyung",
    points: 10,
    fat: true,
}

console.log(player);
console.log(player.name);


console.log(player["name"]);

console.log(player);
player.fat = false;
console.log(player);
player.name = false;
console.log(player);

player.lastName = "Jordan";
console.log(player);

console.log("hello my name is nico");
console.log("hello my name is daly");
console.log("hello my name is michael");
console.log("hello my name is son");


function sayHello() {

    console.log("hello!");
}

sayHello();



function sayHello(name, age) {
    console.log("my name is "+name, age);
}

sayHello("nico", 10);


function plus(a,b){
    console.log(a + b);

}

plus(11, 18);

const player1 = {
    name: "nico",
    sayo: function(otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you!");

    },
};

console.log(player1.name);
player1.sayo("lynn");


const calculator = {

    add: function(a, b) {
        return (a + b);
    },

    divide: function(a, b){
        return (a / b);
    },
    
    multi: function(a, b){
        return (a * b);
    },

    power: function(a, b){
        return (a ** b);
    },
};

const addResult = calculator.add(10,10);
const divideResult = calculator.divide(10,10);
const multiResult = calculator.multi(10,10);
const powerResult = calculator.power(10,10);

console.log(addResult); 



const age = parseInt(prompt("how old are you"));


if(isNaN(age) || age < 0){
    console.log("Please write a number and positive number");
}

else if (age < 18) {
    console.log("you are too young");
}

else if (age >= 18 && age <=50){
    console.log("you can drink")
}

else {
    console.log("you die");
}


const title = document.getElementById("something");

title.innerText = "Got you!";
console.log(title.className);








