let content = document.querySelector("div");
function listOfColours(colours) {
  // Write your code here...
  
  let selector = document.createElement("select");
  colours.forEach(color => {
    let opt = document.createElement("option");
    opt.value = color;
    opt.innerHTML = color;
    selector.appendChild(opt);
  });
  content.appendChild(selector);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);

let selectElement = document.querySelector('select');

selectElement.addEventListener('change', (e) => {
  // content.innerHTML += `You like ${e.target.value}`;
  // console.log(e.target.value);

  let p = document.createElement("p");
  p.innerHTML = `You like ${e.target.value}`;
  p.style.color = e.target.value;
  p.style.fontSize = "2em";
  content.appendChild(p);
});
