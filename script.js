const notesList = ["C", "D", "E", "F", "G", "A", "B"];

function generateMusic() {
  let music = [];
  const length = Math.floor(Math.random() * 8) + 5;

  for (let i = 0; i < length; i++) {
    const randomNote = notesList[Math.floor(Math.random() * notesList.length)];
    music.push(randomNote);
  }

  document.getElementById("notes").innerHTML =
    "🎶 Generated Notes:<br><b>" + music.join(" - ") + "</b>";
}
