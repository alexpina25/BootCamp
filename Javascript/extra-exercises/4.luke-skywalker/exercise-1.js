/* Dado el siguiente javascript filtra los videojuegos por gender = 'Aventura' usando .filter()
 y usa .reduce() para conseguir la media de sus .score.
  La función .find() también podría ayudarte para el contrar el genero 'Aventura' en el array .gender.
 */

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhalla", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Odissey", genders: ["Plataforma"], score: 8.5 },
  { name: "Diablo III", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Shadow of the Colossus",
    genders: ["Aventura", "El mejor videojuego"],
    score: 10,
  },
];

const filteredGames = videogames.filter((game) =>
  game.genders.includes("Aventura")
);

const totalScores = filteredGames.reduce((acc, { score }) => {
  return acc + score;
}, 0);

const averageScore = totalScores / filteredGames.length;

console.log(averageScore);
