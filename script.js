//? DOM
const timerElement = document.querySelector('#timer');
const newGameButtonElement = document.querySelector('#new-game-button');
const writingAreaElement = document.querySelector('#writing-area');
const writingDisplayElement = document.querySelector('#writing-display');
const cursorElement = document.querySelector('#cursor');

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

const formatWord = function (word) {
    return `<div class='word'><span class='letter'>${word.split('').join('</span><span class = "letter">')}</span></div>`;


    // split method splits a string into an array of substrings
    // join method joins all elements of an array into a string

    // word.split('') -> splits the word into an array of characters
    // word.split('').join('</span><span class = "letter">') -> joins all elements of the array into a string, with the specified separator
}

const generateWriting = function () {
    writingDisplayElement.textContent = '';
    const randomWriting = [];

    for (let i = 0; i < 100; i++) {
        randomWriting.push(randomWordGen());
    }

    console.log(randomWriting);

    const randomString = randomWriting.join(' ');
    console.log(randomString);

    console.log(randomString.split(' '));

    randomString.split(' ').forEach((word) => {
        const formattedWord = formatWord(word);
        // console.log(formattedWord);
        writingDisplayElement.innerHTML += formattedWord;
    });

}


//?----------------------------------------------------------
//When the writing area is in focus, and start typing -> register keypresses
//When the keypresses match the characters in the string -> highlight the character -> move to the next character

//When the keypresses don't match the characters in the string -> highlight the character in red
//When the keypresses match the characters in the string -> move to the next character

// also need to start timer when the writing area is in focus and start typing
//?----------------------------------------------------------

const newGame = function () {

    generateWriting();

    document.querySelector('.word').classList.add('active');
    document.querySelector('.letter').classList.add('active');

}

newGame();

//?----------------------------------------------------------

writingAreaElement.addEventListener('keydown', (event) => {
    const input = event.key;
    console.log('Key Pressed:', input);

    // 2 arrays -> one for words, one for letters
    // When we start typing -> we go into the word array -> and then into the letter array
    // if we press space bar -> we go to the next word in the word array

    // 1 array -> word array
    // when we start typing -> we go into the word array
    // -> wordarray[0] -> .split('') -> letters
    // -> if what we type matches these letters, insert correct classes



});

/*
let i = 0;
writingAreaElement.addEventListener('keydown', (event) => {
    const character = event.key;
    console.log('key pressed', character);

    const arraySpan = writingDisplayElement.querySelectorAll('span');
    // returns an array of all characters in the writing display
    console.log('array span:', arraySpan[i]);
    console.log(arraySpan);


    //! ADD AN ACTIVE CLASS TO THE CHARACTER THAT IS BEING TYPED -> move cursor
    arraySpan[i].classList.add('active');


    const activeCharacter = document.querySelector('.active');
    cursor.style.top = activeCharacter.getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = activeCharacter.getBoundingClientRect().left + 'px';


    if (character === 'Backspace') {
        console.log('backspace pressed');
        console.log('index:', i);

        if (i === 0) {
            arraySpan[i].classList.remove('correct');
            arraySpan[i].classList.remove('incorrect');
            arraySpan[i].classList.remove('active');

            return;
        }

        arraySpan[i - 1].classList.remove('correct');
        arraySpan[i - 1].classList.remove('incorrect');
        arraySpan[i - 1].classList.remove('active');

        cursor.style.top = activeCharacter.getBoundingClientRect().top + 2 + 'px';
        cursor.style.left = activeCharacter.getBoundingClientRect().left - 10 + 'px';

        i--;
    }
    else if (character === arraySpan[i].textContent) {
        console.log('correct key pressed');
        console.log('index:', i);

        arraySpan[i].classList.add('correct');
        arraySpan[i].classList.remove('incorrect');
        arraySpan[i].classList.remove('active');
        arraySpan[i + 1].classList.add('active');

        i++;

    }
    else if (character !== arraySpan[i].textContent && character !== 'Backspace') {
        console.log('incorrect key pressed');
        console.log('index:', i);

        arraySpan[i].classList.add('incorrect');
        arraySpan[i].classList.remove('correct');
        arraySpan[i].classList.remove('active');
        arraySpan[i + 1].classList.add('active');

        i++;
    }

    console.log('active character:', arraySpan[i]);
});
*/



