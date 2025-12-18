const notesList = ["C", "D", "E", "F", "G", "A", "B"];

const frequencies = {
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.0,
  A: 440.0,
  B: 493.88
};

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playNote(freq, time) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = freq;

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.4);
}

function generateMusic() {
  let music = [];
  let currentTime = audioContext.currentTime;

  const length = Math.floor(Math.random() * 6) + 6;

  for (let i = 0; i < length; i++) {
    const note = notesList[Math.floor(Math.random() * notesList.length)];
    music.push(note);

    playNote(frequencies[note], currentTime);
    currentTime += 0.5;
  }

  document.getElementById("notes").innerHTML =
    "🎶 Generated Notes:<br><b>" + music.join(" - ") + "</b>";
}
