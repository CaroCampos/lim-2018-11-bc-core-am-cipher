window.cipher = {
	encode:(string, offset) => {
		let resultLetter = '';
		for (let i = 0; i < string.length; i++) {
			let asciiLetter = string.toUpperCase().charCodeAt(i);
			if (asciiLetter === 32) {
				resultLetter += ' ';
			} else {
				resultLetter += String.fromCharCode((asciiLetter - 65 + offset) % 26 + 65);
			}
		}
		return resultLetter;
	},
	decode:(string, offset) => {
		let resultLetter = '';
		for (let i = 0; i < string.length; i++) {
			let asciiLetter = string.toUpperCase().charCodeAt(i);
			if (asciiLetter === 32) {
				resultLetter += ' ';
			} else {
				resultLetter += String.fromCharCode((asciiLetter + 65 - offset) % 26 + 65);
			}
		}
		return resultLetter;
	}
};