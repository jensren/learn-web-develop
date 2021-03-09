const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function () {
  const verse = verseChoose.value;
  updateDisplay(verse);
};

function updateDisplay(verse) {
  let url = `data/${verse.toLowerCase().replace(" ", "")}.txt`;

  fetch(url).then((response) => {
    return response.text()
  }).then((text) => {
      poemDisplay.textContent = text;
  });
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';