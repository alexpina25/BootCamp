/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const button = document.createElement("div");
button.innerHTML = `<button id="btnToClick">Info del evento</button>`;
document.body.appendChild(button);

const logInfo = event => console.log(event);

button.addEventListener("click", logInfo);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector(".focus");

const logFocus = event => console.log(event);

focus.addEventListener("focus", logFocus);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector(".value");

const loginput = event => console.log(event);

input.addEventListener("input", loginput);