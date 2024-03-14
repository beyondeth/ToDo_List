const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //= const toDoInput = document.querySelector("#todo-form input"); //
const toDoList = document.getElementById("todo-list");

let toDos = []; //const를 let으로 바꿔서 업데이트가 가능하도록//

// --------------- Strings ---------------
const TODOS_KEY = "todos";

// --------------- Functoins ---------------
function saveToDos(newTodo){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo){
    //console.log("i will pain", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.innerText = newTodo.text;
    
    const button = document.createElement("button");
    button.innerText = "✔️";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(button);
    toDoList.appendChild(li);
}


function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(); //중요//
}

function handToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(newTodoObj);
}

toDoForm.addEventListener("submit", handToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // toDos 에 parsedToDos를 넣어서 전에 있던 toDo 들을 복원 //
    parsedToDos.forEach(paintToDo);
}

/*filter 함수는 무조건 트로값만 반환함//

// const arr = ["pizza", "banana", "tomato"]
// function sexyFilter(food){return food ! == "banana"}
//arr.filter(sexyFilter)

function sexyFilter(){

}
[1,2,3,4].filter(sexyFilter);
*/
