const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.backgroundColor = "lightgray";
}
const con = document.getElementById("place-container");
con.classList.add("text-center");
