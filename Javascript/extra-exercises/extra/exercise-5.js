/* Al siguiente javascript no funciona como deberia...podrias arreglarlo?

Debería mostrar por consola "Pepito Palotes". */

function a() {
  const name = "Pepito Palotes";
  b(name);
}

/* Añadiendo el parametro que se le pasa en la function a()*/
function b(name) {
  console.log(name);
}

a();
