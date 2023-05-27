'use strict';


// STEP 1: grab form element from DOM
let formElm = document.getElementById("user-form");

console.log("hello world")


// STEP 2: define handleSubmit function
function handleSubmit(event) {
    event.preventDefault();

    // GET TARGET
    let target = event.target;
    // GET DATA FROM FORM
    let username = target.username.value;
    let password = target.password.value;
    let email = target.email.value;

    // output to DOM
    let resultsElm = document.getElementById("results");
    let userElm = document.createElement("div");
    userElm.textContent = `${username} has email address: ${email}`;
    resultsElm.appendChild(userElm);
 }



// STEP 3: add event listener for the event
formElm.addEventListener("submit", handleSubmit);
