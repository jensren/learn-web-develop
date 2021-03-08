const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function () {
  const verse = verseChoose.value;
  updateDisplay(verse);
};

function updateDisplay(verse) {
  let url = `data/${verse.toLowerCase().replace(" ", "")}.txt`;

  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'text';

  request.onload = () => {
    poemDisplay.textContent = request.response;
  };

  request.send();
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';