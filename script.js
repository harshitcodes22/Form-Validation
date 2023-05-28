"use strict";

const username = document.querySelector(".Username");
const password = document.querySelector(".password");
const display = document.querySelector(".error-display");
console.log(display.classList);
let i,
  upp = 0,
  special = 0,
  number = 0,
  whitespace = 0;
addEventListener("submit", function (e) {
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  e.preventDefault();
  const usernameValue = username.value;
  const passwordValue = password.value;
  const usernameValueLenght = usernameValue.length;
  if (usernameValueLenght >= 8) {
    for (i = 0; i < usernameValueLenght; i++) {
      if (usernameValue[i] == "@" || usernameValue[i] == "_") {
        special++;
      }

      for (let j = 0; j < 9; j++) {
        if (usernameValue[i] == num[j]) {
          number++;
        }
      }
      if (usernameValue[i] == " ") {
        whitespace++;
      }
      if (usernameValue[i] == usernameValue[i].toUpperCase()) {
        upp++;
      }
    }
    upp = upp - number - special;
    console.log(upp, number, special);
    if (number == 0) {
      display.classList.remove("hidden");
      display.textContent = "Min 1 number must be there";
    } else if (special == 0) {
      display.classList.remove("hidden");
      display.textContent = "min one special character(@,_) should be present";
    } else if (upp == 0) {
      display.classList.remove("hidden");
      display.textContent = "One upperCase letter should be present";
    } else {
      if (number >= 1) {
        display.classList.add("hidden");
      }
    }
    // console.log(upp);
    ////////
    upp = number = special = 0;
  } else {
    display.classList.remove("hidden");
    display.innerHTML = "First Name must me 8 characters long";
  }
});
