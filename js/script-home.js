// Seleciona o campo de entrada
const inputText = document.getElementById('input-text');

// Adiciona um ouvinte de evento para a tecla Enter
inputText.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    // Realiza uma ação quando o usuário pressiona a tecla Enter
    const searchTerm = inputText.value;
    alert('Você pesquisou por: ' + searchTerm);
  }
});