const guessWords = ['primo', 'treno', 'clima'];
let pickedWord;
let guessingTempted = 0;
let guessingWord = '';

function drawGridAndKeyboard() {
    const gridElement = document.querySelector('.grid');
    gridElement.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        const cell = document.createElement('div');
        cell.className = `gridIndex_${i}`
        gridElement.appendChild(cell);
    }

    const keyboard = document.getElementById('keyboard');
    const elementsToRemoveClassFrom = keyboard.querySelectorAll('.key');

    elementsToRemoveClassFrom.forEach(element => {
        element.classList.remove('letter-wrong');
        element.classList.remove('letter-correct');
        element.classList.remove('letter-semi-correct');
    });
}

function pickWord() {
    const randomIndex = Math.floor(Math.random() * guessWords.length);
    pickedWord = guessWords[randomIndex];
    console.log(`Word picked: ${pickedWord}`);
}

function drawWord() {
    for (let i = 0; i < 5; i++) {
        const classIndex = (guessingTempted * 5) + i;
        const cell = document.getElementsByClassName(`gridIndex_${classIndex}`)[0];
        const letter = guessingWord.length - 1 < i ? '' : guessingWord[i];
        cell.innerText = letter;
    }
}

function highlightKeyboard(letter, className) {
    const keyboardKey = document.getElementsByClassName(letter)[0];

    const priority = {
        'letter-wrong': 1,
        'letter-semi-correct': 2,
        'letter-correct': 3
    };

    const existingClass = Array.from(keyboardKey.classList).find(cls => priority[cls] !== undefined);

    if (!existingClass || priority[className] > priority[existingClass]) {
        if (existingClass) {
            keyboardKey.classList.remove(existingClass);
        }
        keyboardKey.classList.add(className);
    }
}

function guess() {
    if(guessingWord.length < 5) {
        alert('Word must contain 5 letters');
        return;
    }

    let correctMarks = Array(5).fill(false);
    let pickTmp = pickedWord.split('');
    let guessTmp = guessingWord.split('');
    let letterCount = {};

    for (let i = 0; i < 5; i++) {
        const letter = pickTmp[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;

        if (guessTmp[i] === letter) {
            correctMarks[i] = true;
            letterCount[letter]--;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (!correctMarks[i]) {
            const letter = guessTmp[i];
            const cell = document.getElementsByClassName(`gridIndex_${guessingTempted * 5 + i}`)[0];

            if (letterCount[letter] > 0) {
                cell.classList.add('letter-semi-correct');
                highlightKeyboard(letter, 'letter-semi-correct');
                letterCount[letter]--;
            } else {
                cell.classList.add('letter-wrong');
                highlightKeyboard(letter, 'letter-wrong');
            }
        } else {
            const cell = document.getElementsByClassName(`gridIndex_${guessingTempted * 5 + i}`)[0];
            cell.classList.add('letter-correct');
            highlightKeyboard(guessTmp[i], 'letter-correct');
        }
    }
    if(guessingWord == pickedWord) {
        alert('Win!!!');
        init();
        return;
    }
    
    guessingTempted++;
    guessingWord = ''

    if(guessingTempted >= 6) {
        alert('Lose!!!');
        init();
    }
}

function init() {
    drawGridAndKeyboard();
    pickWord();

    guessingTempted = 0;
    guessingWord = '';
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'Backspace') {
        guessingWord = guessingWord.slice(0, -1);
        drawWord();
    }
    else if(event.key === 'Enter') {
        guess();
    }
    else if (event.key.match(/^[a-zA-Z]$/) && guessingWord.length < 5) {
        guessingWord += event.key;
        drawWord();
    }
});

init();