let $ = function (selector){
  return document.querySelector(selector);
}
let $$ = function (selector){
  return document.querySelectorAll(selector);
}

let createElement = function(tagName, className, content){
  let newELement = document.createElement(tagName);
  if(className){
    newELement.setAttribute("class", className);
  }
  if(content){
    newELement.innerHTMl = content;
  }
  return newELement;
}