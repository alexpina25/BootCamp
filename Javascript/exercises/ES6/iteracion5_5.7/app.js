/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const nameStreamers = [];
for (const streamer of streamers) {
  nameStreamers.push(streamer.name);
}

const button = document.querySelector("button");

const filterStreamers = () => {
  const input = document.querySelector("[data-function='toFilterStreamers']");
  nameStreamers.filter((streamer) => {
    if (streamer.includes(input.value)) {
      console.log(streamer);
    }
  });
};

button.addEventListener("click", filterStreamers);
