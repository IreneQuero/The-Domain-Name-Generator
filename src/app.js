/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateDomain();
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".io", ".es", ".net"];

  let concatenation = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < extension.length; h++) {
          concatenation +=
            "<p>" + pronoun[i] + adj[j] + noun[k] + extension[h] + "</p>";
        }
      }
    }
  }
  return concatenation;
};
