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

//////////////

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


window.cipher = {
  encode: cipher,
  decode: decipher
};
