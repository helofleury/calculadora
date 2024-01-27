const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const buttonText = event.target.textContent;

    switch (buttonText) {
      case '=':
        try {
          // Substituímos o sinal de porcentagem pela operação apropriada
          let expression = display.textContent.replace(/%/g, '/100*');
          display.textContent = eval(expression);
        } catch (error) {
          display.textContent = 'Error';
        }
        break;
      case 'C':
        display.textContent = display.textContent.slice(0, -1);
        break;
      case 'AC':
        display.textContent = '0';
        break;
      default:
        if (display.textContent === '0' || display.textContent === 'Error') {
          display.textContent = buttonText;
        } else {
          display.textContent += buttonText;
        }
    }
  }
});