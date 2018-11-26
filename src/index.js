let text = '';
let offset =  '';

const btnCipher = document.getElementById('btn-cipher');
const btnDecipher = document.getElementById('btn-decipher');
const resultMessage = document.getElementById('result-message');

let resultLetter = '';

//////////////

const cipher = () => {
  text = document.getElementById('text').value;
  offset = parseInt(document.getElementById('offset-position').value)%26;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      resultLetter += ' ';
    } else {
        const asciiLetter = (text.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
        const letterCipher = String.fromCharCode(asciiLetter);
        resultLetter += letterCipher;
    }
  }
  return resultLetter;
};

btnCipher.addEventListener('click', () => {
  text = document.getElementById('text').value;
  resultMessage.innerHTML = cipher(text);
});

/////////////

const decipher = () => {
  text = document.getElementById('text').value;
  offset = parseInt(document.getElementById('offset-position').value)%26;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      resultLetter += ' ';
    } else {
        const asciiLetter = (text.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
        const letterCipher = String.fromCharCode(asciiLetter);
        resultLetter += letterCipher;
    }
  }
  return resultLetter;
};

btnDecipher.addEventListener('click', () => {
  text = document.getElementById('text').value;
  resultMessage.innerHTML = decipher(text);
});
