/* En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9. (Yo cuento 2 xd) */

const animals = ["Rintintín", "Cosmo", "Gato con botas", "Asno"];

let count = 0;

for (const animal of animals) {
  for (let index = 0; index < animal.length; index++) {
    if (animal[index] == "a") {
      count += 1;
    }
  }
}

console.log(count);
