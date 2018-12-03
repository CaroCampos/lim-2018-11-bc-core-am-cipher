window.cipher = {
	encode:(offset, string) => {
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
	decode:(offset, string) => {
		let resultLetter = '';
		for (let i = 0; i < string.length; i++) {
			let asciiLetter = string.toUpperCase().charCodeAt(i);
			if (asciiLetter === 32) {
				resultLetter += ' ';
			} else {
				resultLetter += String.fromCharCode((asciiLetter + 65 - (offset%26)) % 26 + 65);
			}
		}
		return resultLetter;
	}
};