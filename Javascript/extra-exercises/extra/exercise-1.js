/* Crea una función llamada splitName que divida un nombre completo en nombre y apellido.
 Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

De tal modo que si tenemos el texto "Peter Parker" obtendremos dos variables...una con el valor "Peter" y otra con el valor "Parker".

En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf() */

const fullName = "Alejandro Pina";
let name;
let surname;

const splitName = () => {
  const space = fullName.indexOf(" ");

  name = fullName.substring(0, space);
  surname = fullName.substring(space + 1, fullName.length);

  console.log(name);
  console.log(surname);
};

splitName();
