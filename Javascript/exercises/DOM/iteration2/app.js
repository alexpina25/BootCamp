// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const p = document.createElement("p");

div2.appendChild(p);
document.body.appendChild(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement("div");
const p2 = document.createElement("p");

for (let index = 0; index < 6; index++) {
  div.innerHTML += `<p></p>`;
}
document.body.appendChild(div3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p3 = document.createElement("p");
p3.innerHTML = `Soy dinámico!`;
document.body.appendChild(p3);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
h2.innerHTML = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.innerHTML = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const fnRemoveMe = document.querySelectorAll(".fn-remove-me");

for (const toRemove of fnRemoveMe) {
  toRemove.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll("div");
const divParent = divs[1];

const p4 = document.createElement("p");
p4.innerHTML = `Voy en medio!`;

document.body.insertBefore(p4, divParent);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsInsert = document.querySelectorAll("div[class='fn-insert-here']");

for (const div of divsInsert) {
  const p5 = document.createElement("p");
  p5.innerHTML = `Voy dentro!`;
  div.appendChild(p5);
}
