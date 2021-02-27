///////////////////   *********         PART II          *********/////////////////////

let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let Jumbotron = document.querySelector(".Jumbotron");
let donateBike = document.getElementsByClassName("btn-lrg");

blueBtn.onclick = function() {
    Jumbotron.style.backgroundColor = "#588fbd";
    donateBike[0].style.backgroundColor = "#ffa500";
    donateBike[1].style.backgroundColor = "black";
    donateBike[1].style.color = "white";
}

orangeBtn.onclick = function() {
    Jumbotron.style.backgroundColor = "#f0ad4e";
    donateBike[0].style.backgroundColor = "#5751fd";
    donateBike[1].style.backgroundColor = "#31b0d5";
    donateBike[1].style.color = "white";
}

greenBtn.onclick = function() {
    Jumbotron.style.backgroundColor = "#87ca8a";
    donateBike[0].style.backgroundColor = "black";
    donateBike[1].style.backgroundColor = "8c9c08";
    donateBike[1].style.color = "black";
}


///////////////////   *********         PART II          *********/////////////////////

let allBtn = document.getElementsByTagName("button");
let submitBtn = allBtn[allBtn.length-1];
let email = document.getElementById("exampleInputEmail1");
let theName = document.getElementById("example-text-input");
let desc = document.getElementById("exampleTextarea");

submitBtn.onclick = function(){
    let errorsCount = 0;
    if (email.value.length === 0 || !email.value.includes("@")){
        email.style.backgroundColor = "red";
        errorsCount++;
    }
    else 
        email.style.backgroundColor = "white";
        
    if (theName.value.length === 0){
        theName.style.backgroundColor = "red";
        errorsCount++;
    }
    else 
        theName.style.backgroundColor = "white";
        
        // alert("Your Name shouldn't be empty");
    if (desc.value.length === 0){
        desc.style.backgroundColor = "red";
        errorsCount++;
    }
    else 
        desc.style.backgroundColor = "white";
        // alert("Describe yourself shouldn't be empty");
    if (errorsCount === 0){
        
        email.value = "";
        theName.value = "";
        desc.value = "";
        alert("Thank you for submitting with us.");
    }
    // alert(email.value.length );
    event.preventDefault();
}