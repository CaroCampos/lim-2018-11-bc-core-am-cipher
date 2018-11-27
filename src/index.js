let string = '';
let offset =  '';

const btnCipher = document.getElementById('btn-cipher');
const btnDecipher = document.getElementById('btn-decipher');
const btnEnter = document.getElementById('btn-enter')
const resultMessage = document.getElementById('result-message');

let resultLetter = '';

//////////////

const cipher = () => {
  string = document.getElementById('text').value;
  offset = parseInt(document.getElementById('offset-position').value)%26;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      resultLetter += ' ';
    } else {
        const asciiLetter = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
        const letterCipher = String.fromCharCode(asciiLetter);
        resultLetter += letterCipher;
    }
  } 
  return resultLetter;
};

btnCipher.addEventListener('click', () => {
  string = document.getElementById('text').value;
  resultMessage.innerHTML = cipher(string);
});

/////////////

const decipher = () => {
  string = document.getElementById('text').value;
  offset = parseInt(document.getElementById('offset-position').value)%26;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      resultLetter += ' ';
    } else {
        const asciiLetter = (string.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
        const letterCipher = String.fromCharCode(asciiLetter);
        resultLetter += letterCipher;
    }
  }
  return resultLetter;
};

btnDecipher.addEventListener('click', () => {
  string = document.getElementById('text').value;
  resultMessage.innerHTML = decipher(string);
});

btnEnter.addEventListener('click', () => {
  document.getElementById('section2').style.display = 'block';
  document.getElementById('section1').style.display = 'none';
});
