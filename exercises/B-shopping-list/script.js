function shoppingList(arrayOfPeople) {
  // Write your code here...
  let ul = document.createElement("ul");
  let content = document.querySelector("#content");
   
  arrayOfPeople.forEach(arr => {
    let li = document.createElement("li");
    li.innerHTML = arr;
    ul.appendChild(li);
  });

  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
