const cardArray = [
  {
    id: 1,
    name: "earth",
    img: "../public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "../public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "../public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "../public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "../public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "../public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "../public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "../public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "../public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "../public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "../public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "../public/exercise-1/uranus.svg",
  },
];

cardArray.sort(function () {
  return Math.random() - 0.5;
});

const grid = document.querySelector(".b-grid");
for (let index = 0; index < cardArray.length; index++) {
  grid.innerHTML += `<button><img id="${index}" name="${cardArray[index].name}" src="../public/exercise-1/universe.svg"/></button>`;
}

const cards = document.querySelectorAll("button");
const scoreElement = document.querySelector('[data-function="score"]');
const attemptsElement = document.querySelector('[data-function="attempts"]');

let score = 0;
let attempts = 0;

let counter = 0;

let selectedCard1;
let selectedCard2;
let nameCard1;
let nameCard2;

for (const card of cards) {
  card.addEventListener("click", (evt) => {
    counter += 1;

    selectCard(card);

    sumAttempts();

    failedCards();

    successCards();

    showWinnerMsg();
  });
}

const selectCard = (card) => {
  if (selectedCard1 == null) {
    selectedCard1 = card;

    nameCard1 = card.firstChild.getAttribute("name");
    let idCard1 = card.firstChild.getAttribute("id");

    selectedCard1.firstChild.src = cardArray[idCard1].img;
  } else if (selectedCard2 == null) {
    selectedCard2 = card;

    nameCard2 = card.firstChild.getAttribute("name");
    let idCard2 = card.firstChild.getAttribute("id");

    selectedCard2.firstChild.src = cardArray[idCard2].img;
  }
};

const failedCards = () => {
  if (
    (nameCard1 != nameCard2 || selectedCard1 == selectedCard2) &&
    counter == 2
  ) {
    selectedCard1.classList.remove("selected");
    selectedCard2.classList.remove("selected");

    selectedCard1.firstChild.src = "../public/exercise-1/universe.svg";
    selectedCard2.firstChild.src = "../public/exercise-1/universe.svg";

    selectedCard1 = null;
    selectedCard2 = null;
    nameCard1 = null;
    nameCard2 = null;
    counter = 0;
  }
};

const successCards = () => {
  if (
    nameCard1 == nameCard2 &&
    selectedCard1 != selectedCard2 &&
    counter == 2
  ) {
    selectedCard1.firstChild.src = "../public/exercise-1/tick.svg";
    selectedCard2.firstChild.src = "../public/exercise-1/tick.svg";

    selectedCard1.classList.remove("selected");
    selectedCard2.classList.remove("selected");

    selectedCard1.disabled = true;
    selectedCard2.disabled = true;

    selectedCard1 = null;
    selectedCard2 = null;

    nameCard1 = null;
    nameCard2 = null;
    counter = 0;

    score += 1;
    scoreElement.innerHTML = `${score}`;
  }
};

const sumAttempts = () => {
  if (selectedCard1 != selectedCard2 && counter == 2) {
    attempts += 1;
    attemptsElement.innerHTML = `${attempts}`;
  }
};

const showWinnerMsg = () => {
  if (score == 6) {
    alert(`Winner! You win the game win ${attempts} attempts`);
  }
};
