const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const printHere = document.querySelector("[data-function='printHere']");

const ul = document.createElement("ul");

for (const place of places) {
  let li = document.createElement("li");
  li.innerHTML = `<div data-function="printHere">${place}</div>`;
  ul.appendChild(li);
}

printHere.appendChild(ul);
