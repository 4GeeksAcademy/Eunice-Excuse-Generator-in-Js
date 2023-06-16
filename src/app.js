/* eslint-disable */
import "bootstrap";
import "./style.css";

/* Event listener for button click and initial console log */

window.onload = () => {
  document.getElementById("button").addEventListener("click", () => {
    document.getElementById("the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello");
};

/* Excuse generator function */

let generateExcuse = () => {
  let who = [
    "my little brother",
    "my roommate",
    "my boss",
    "the aliens",
    "my partner",
    "the President",
    "my imaginary friend"
  ];
  let what = ["hid", "ate", "stole", "erased", "sold", "forgot", "ate again"];
  let avoid = [
    "the cake",
    "my mirror",
    "our cat",
    "the key",
    "your food",
    "my hair",
    "your finger"
  ];
  let when = [
    "last night",
    "this morning",
    "just now",
    "five minutes ago",
    "in another life",
    "last year",
    "before I was born"
  ];
  let sign = [".", "!", "?"];

  /* Random index generation */

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let avoidIndex = Math.floor(Math.random() * avoid.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  let signIndex = Math.floor(Math.random() * sign.length);

  /* Excuse generation */

  let excuse =
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    avoid[avoidIndex] +
    " " +
    when[whenIndex];

  return excuse + sign[signIndex];
};
