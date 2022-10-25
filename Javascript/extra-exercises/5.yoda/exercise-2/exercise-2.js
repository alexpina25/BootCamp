const getData = async () => {
  try {
    const rawData = await fetch("http://localhost:3000/diary");
    const jsonData = await rawData.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

const orderNotes = async () => {
  const ulNotes = await getData();

  ulNotes.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return ulNotes;
};

const div = document.createElement("div");

const printData = async () => {
  const notes = await orderNotes();

  for (const note of notes) {
    div.innerHTML += `
    <div>
    <h3>${note.title}</h3>
    <h5>${note.date}</h5>
    <p>${note.description}</p>
    <button>Delete note</button>
    <hr>
    </div>`;
  }

  document.body.appendChild(div);
  deleteNote();
};

const deleteNote = () => {
  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
  }
};
printData();
