/* Al siguiente javascript no funciona como deberia...podrias arreglarlo?

Deberia de imprimir por consola "Peter". */

const user = { name: "Peter", surname: "Parker" };

/* Estaba mal escrita la propiedad del objeto
Para que sólo escriba "Peter" eliminamos la function b y sólo guardamos la propiedad en nama, en vez de llamar a b */
function a(user) {
  const nama = user.name;
  console.log(nama);
}

/* function b(name) {
  return "Hello " + name;
} */

a(user);
