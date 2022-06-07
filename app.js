"use strict";

const sentence = document.querySelector(".input-text");
const btn = document.querySelector(".checker-btn");
const displayResult = document.querySelector(".result");

function checkPalindrom(e) {
  e.preventDefault();
  //const wordReversed = sentence.value.split("").reverse().join("");
  const wordReversed = [...sentence.value.toLowerCase()].reverse().join("");
  if (sentence.value == wordReversed) {
    displayResult.textContent = `${sentence.value} is palindrom`;
  } else displayResult.textContent = `${sentence.value} is not palindrom`;
}

btn.addEventListener("click", checkPalindrom);
