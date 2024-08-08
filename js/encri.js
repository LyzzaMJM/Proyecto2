// Mapeo del alfabeto a código Morse
let morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.',
    '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
    '@': '.--.-', ' ': '/'
};

let morseToText = {};
for (let key in morseCode) {
    morseToText[morseCode[key]] = key;
}

function processText() {
    let inputText = document.getElementById('inputText').value.trim();
    let resultText = decodeFromMorse(inputText);
    document.getElementById('resultText').value = resultText;

    // Esto es para guardar encriptación en localStorage
    let username = localStorage.getItem('username');
    let encryptions = JSON.parse(localStorage.getItem('encryptions')) || {};
    if (!encryptions[username]) {
        encryptions[username] = [];
    }
    encryptions[username].push({ input: inputText, output: resultText });
    localStorage.setItem('encryptions', JSON.stringify(encryptions));
}

function decodeFromMorse(morse) {
    let result = '';
    let words = morse.split(' / '); // se divide en palabras
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split(' '); //se divide en letras
        for (let j = 0; j < letters.length; j++) {
            let letter = letters[j];
            result += morseToText[letter] || ''; // se usa letra correspondiente o vacío si no se encuentra
        }
        result += ' ';
    }
    return result.trim();
}
