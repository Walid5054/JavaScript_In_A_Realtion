console.log("append js");

const placeList = document.getElementById("places-list");
console.log(placeList);

const li = document.createElement("li");
li.innerText = "kuakata";
placeList.appendChild(li);
const mainCon = document.getElementById("main-container");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "my food list ";
section.appendChild(h1);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "biriyani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "biriyani";
ul.appendChild(li3);
section.appendChild(ul);
mainCon.appendChild(section);
