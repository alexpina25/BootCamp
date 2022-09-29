/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");
  li.innerHTML = `${country}`;
  ul.appendChild(li);
}
document.body.appendChild(ul);
/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const fnRemove = document.querySelector(".fn-remove-me");
fnRemove.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHere = document.querySelector("[data-function='printHere']");
const ul1 = document.createElement("ul");

for (const car of cars) {
  let li = document.createElement("li");
  li.innerHTML = `${car}`;
  ul1.appendChild(li);
}
printHere.appendChild(ul1);

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countriesImgs = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countriesImgs) {
  let div = document.createElement("div");
  let h4 = document.createElement("h4");
  let img = document.createElement("img");

  h4.innerHTML = country.title;
  img.src = country.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */
const btnRemove = document.createElement("button");

btnRemove.innerHTML = `Remove last`;
document.body.appendChild(btnRemove);

const removeLast = () => {};

btnRemove.addEventListener("click", () => {
  let elements = document.querySelectorAll("h4");
  let lastElement = elements[elements.length - 1];

  if (elements.length >= 1) {
    lastElement.parentNode.remove(lastElement);
    console.log(elements.length);
  } else {
    btnRemove.setAttribute("disabled", true);
  }
});
/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

let elements = document.querySelectorAll("h4");

for (const element of elements) {
  let button = document.createElement("button");
  button.innerHTML = "remove this";
  element.parentElement.appendChild(button);

  button.addEventListener("click", () => {
    element.parentElement.remove();
  });
}
