function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(arr => {
    let h1name = document.createElement("h1");
    let h1job = document.createElement("h1");
    let seperator = document.createElement("p");
    h1name.innerHTML = "The Name: " + arr.name;
    h1job.innerHTML = "The Job: " + arr.job;
    seperator.innerText = "----------";
    content.appendChild(h1name);
    content.appendChild(h1job);
    content.appendChild(seperator);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
