const btnEnter = document.getElementById('btn-enter');
const btnCipher = document.getElementById('btn-cipher');
const btnDecipher = document.getElementById('btn-decipher');

btnEnter.addEventListener('click', () => {
	document.getElementById('section2').style.display = 'block';
	document.getElementById('section1').style.display = 'none';
});

btnCipher.addEventListener('click', () => {
	const text = document.getElementById('text').value;
	const position = parseInt(document.getElementById('offset-position').value);
	const resultMessage = (cipher.encode(position, text));
	document.getElementById('result-message').innerHTML = resultMessage;
});

btnDecipher.addEventListener('click', () => {
	const text2 = document.getElementById('text').value;
	const position2 = parseInt(document.getElementById('offset-position').value);
	const resultMessage2 = (cipher.decode(position2, text2));
	document.getElementById('result-message').innerHTML = resultMessage2;
});