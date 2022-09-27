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

let numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let result = 0;
  for (const iterator of param) {
    result += iterator;
  }
  return result;
}
console.log(sumAll(numbers));

/************************************
 * Iteración #4: Calcular el promedio *
 ***********************************/

numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0;
  for (const iterator of param) {
    sum += iterator;
  }

  return sum / param.length;
}
console.log(average(numbers));

/************************************
 * Iteración #5: Calcular promedio de strings *
 ***********************************/
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  let result = 0;
  for (const iterator of param) {
    if (typeof iterator === "string") {
      result += iterator.length;
    } else {
      result += iterator;
    }
  }
  return result;
}
console.log(averageWord(mixedElements));

/************************************
 * Iteración #6: Valores únicos *
 ***********************************/
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  const arrayWithoutDuplicates = [];

  for (const iterator of param) {
    if (!arrayWithoutDuplicates.includes(iterator)) {
        arrayWithoutDuplicates.push(iterator);
    }
  }

  return arrayWithoutDuplicates;
}
console.log(removeDuplicates(duplicates));