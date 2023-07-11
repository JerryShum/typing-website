//? DOM
const timerElement = document.querySelector('#timer');
const newGameButtonElement = document.querySelector('#new-game-button');
const writingAreaElement = document.querySelector('#writing-area');
const writingDisplayElement = document.querySelector('#writing-display');

//?----------------------------------------------------------
const randomWords = 'and would he increase can be do she to end life both against time way new with through if as play how person would real old know few could who own and face again must some during without want would work which people any before house no other world thing'.split(' ');
//?----------------------------------------------------------
// We have a list of random words
// We need to display 100 random words -> loop over 100 times and display a random word each time -> put this into an array
// Convert this array of random words BACK into a string -> join method
// We need to display THIS string of random words in the writing area -> span elements of characters using this string

//?----------------------------------------------------------


const wordCount = randomWords.length;
console.log(wordCount);

const randomWordGen = function () {
    const randomIndex = Math.floor(Math.random() * wordCount);
    //Math.random returns a number between 0 and 1 (0.11, 0.99, 0.5, etc)
    // x wordCount will return a number between 0 and wordCount
    //Math.floor rounds down to the nearest integer
    return randomWords[randomIndex];
}

const generateWriting = function () {
    writingDisplayElement.textContent = '';
    const randomWriting = [];

    for (let i = 0; i < 100; i++) {
        randomWriting.push(randomWordGen());
    }

    const randomString = randomWriting.join(' ');

    randomString.split('').forEach((char) => {
        const characterSpan = document.createElement('span');
        characterSpan.textContent = char;
        writingDisplayElement.appendChild(characterSpan);
    });
}

generateWriting();

//?----------------------------------------------------------
//When the writing area is in focus, and start typing -> register keypresses
//When the keypresses match the characters in the string -> highlight the character -> move to the next character 

//When the keypresses don't match the characters in the string -> highlight the character in red
//When the keypresses match the characters in the string -> move to the next character

// also need to start timer when the writing area is in focus and start typing
//?----------------------------------------------------------



let i = 0;
writingAreaElement.addEventListener('keydown', (event) => {
    const character = event.key;
    console.log('key pressed', character);

    const arraySpan = writingDisplayElement.querySelectorAll('span');
    // returns an array of all characters in the writing display

    if (character === 'Backspace') {
        console.log('backspace pressed');

        if (i === 0) {
            return;
        }

        i--;
        arraySpan[i].classList.remove('correct');
        arraySpan[i].classList.remove('incorrect');


    }
    else if (character === arraySpan[i].textContent) {
        console.log('correct key pressed');

        arraySpan[i].classList.add('correct');
        arraySpan[i].classList.remove('incorrect');

        i++;
        console.log(i);

    }
    else {
        console.log('incorrect key pressed');
        arraySpan[i].classList.add('incorrect');
        arraySpan[i].classList.remove('correct');

        i++;
    }






});



