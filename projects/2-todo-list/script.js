function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(element => {
    addList(element, list);
  });
  
}

function addList(element, ul){
  let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = element.task;
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    let i1 = document.createElement("i");
    i1.className = "fa fa-check";
    
    let i2 = document.createElement("i");
    i2.className = "fa fa-trash";
    span.appendChild(i1);
    span.appendChild(i2);
    li.appendChild(span);
    ul.appendChild(li);
    i1.onclick = function(){
      if (element.completed){
        li.style.textDecoration = "none";
        element.completed = false;
      }
      else{
        li.style.textDecoration = "line-through";
        element.completed = true;
      }
    }
    i2.onclick = function(){
      li.remove();
      deleteTodo(element);
    }
}

function deleteTodo(element){
  for( var i = 0; i < todos.length; i++){ 
           if ( todos[i] === element)
              todos.splice(i, 1); 
      }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let todoText = document.getElementById("todoInput");
  let todo = {task : todoText.value, completed: false};
  let list = document.getElementById("todo-list");
  todos.push(todo);
  //  alert(todoText.value);
   addList(todo, list);
   todoText.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  let checks = document.querySelectorAll("li");
  checks.forEach(check => {
    if (check.style.textDecoration == "line-through"){
        check.remove();
    }
  })

  todos.forEach(todo => {
    alert(todo.completed);
    if (todo.completed){
     deleteTodo(todo);
    }
    
    // console.log(todo.completed);
  })
   console.log(todos);
}

let divgx = document.getElementsByClassName("gx-5")[0];

let deleteAllBtn = document.createElement("button");
deleteAllBtn.className = "btn btn-primary mb-3";
deleteAllBtn.onclick = function(){deleteAllCompletedTodos()};
deleteAllBtn.innerHTML = "Delete All Completed Todos";
deleteAllBtn.style.maxWidth = "100px";
divgx.appendChild(deleteAllBtn);
