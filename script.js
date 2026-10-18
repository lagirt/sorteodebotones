function chooseDestiny() {
  const redBtn = document.getElementById('btn-red');
  const blueBtn = document.getElementById('btn-blue');
  const resultArea = document.getElementById('result-area');
  const resultMessage = document.getElementById('result-message');

  // Desactivar los botones hasta que el usuario pulse "Volver a jugar"
  redBtn.disabled = true;
  blueBtn.disabled = true;

  // Resultado aleatorio: 50% de probabilidad de ganar o perder
  const won = Math.random() < 0.5;

  if (won) {
    resultMessage.textContent = 'Has ganado';
    resultMessage.className = 'result-message win';
  } else {
    resultMessage.textContent = 'Has perdido';
    resultMessage.className = 'result-message lose';
  }

  resultArea.classList.remove('hidden');
}

function resetGame() {
  const redBtn = document.getElementById('btn-red');
  const blueBtn = document.getElementById('btn-blue');
  const resultArea = document.getElementById('result-area');
  const resultMessage = document.getElementById('result-message');

  redBtn.disabled = false;
  blueBtn.disabled = false;
  resultMessage.textContent = '';
  resultArea.classList.add('hidden');
}
