/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

const getData = async () => {
  try {
    const rawData = await fetch("https://api.agify.io?name=michael");
    const jsonData = await rawData.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};

getData();
