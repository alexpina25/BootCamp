/************************************
 * Iteración #1: Buscar el máximo *
 ***********************************/

// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
console.log(sum(5, 10));

/************************************
 * Iteración #2: Buscar la palabra más larga *
 ***********************************/

//Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longestWord = "";

  for (const iterator of param) {
    if (iterator.length > longestWord.length) {
      longestWord = iterator;
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers));

/************************************
 * Iteración #3: Calcular la suma *
 ***********************************/

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let result = 0;
  for (const iterator of param) {
    result += iterator;
  }
  return result;
}
console.log(sumAll(numbers));