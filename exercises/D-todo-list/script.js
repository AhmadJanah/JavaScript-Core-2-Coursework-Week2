
function todoList(todos) {
  // Write your code here...
  let content = document.querySelector("div");
  let todoLength = todos.length;
  let ul = document.createElement("ul");
  todos.forEach(todo => {
    let li = document.createElement("li");
    li.innerHTML = todo.todo;
    ul.appendChild(li);
  });
  
  content.appendChild(ul);
  // console.log(ul);
}





const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);

let li = document.querySelectorAll("li");
let newArr = [];

li.forEach(element => {
  element.addEventListener("click", (e) =>{
  // console.log(e.target.childNodes);
  let myItem = e.target.childNodes[0].textContent;
  if (newArr.find(item => item == myItem))
  { 
    // alert("True " + myItem);
    for(let i = 0; i < li.length; i++){ 
     if ( newArr[i] === myItem) { 
            newArr.splice(i, 1); 
        }
      }
    let allDivs = document.getElementById(myItem);
      // allDivs[0].innerHTML = "";
        allDivs.remove();
  }
  else
  {
    // alert("false " + myItem);
    newArr.push(myItem);
    let p = document.createElement("p");
    p.innerHTML = myItem;
    p.id = myItem;
    content.appendChild(p);
  }
});
});


