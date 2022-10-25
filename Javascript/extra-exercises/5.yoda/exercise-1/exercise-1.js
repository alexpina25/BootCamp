const getData = async () => {
  try {
    const rawData = await fetch("https://breakingbadapi.com/api/characters");
    const jsonData = await rawData.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

const printData = async () => {
  const characters = await getData();

  const div = document.createElement("div");

  for (const character of characters) {
    const { name, img } = character;

    div.innerHTML += `<h2>${name}</h2>
        <img style="width: 300px" src="${img}" alt="${name}">`;
  }

  document.body.appendChild(div);
};

printData();
