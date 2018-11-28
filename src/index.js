let string = '';
let offset =  '';
let resultLetter = '';

const btnEnter = document.getElementById('btn-enter');
const btnCipher = document.getElementById('btn-cipher');
const btnDecipher = document.getElementById('btn-decipher');
const resultMessage = document.getElementById('result-message');

btnEnter.addEventListener('click', () => {
  document.getElementById('section2').style.display = 'block';
  document.getElementById('section1').style.display = 'none';
});

btnCipher.addEventListener('click', () => {
  string = document.getElementById('text').value;
  resultMessage.innerHTML = cipher(string);
});

btnDecipher.addEventListener('click', () => {
  string = document.getElementById('text').value;
  resultMessage.innerHTML = decipher(string);
});

