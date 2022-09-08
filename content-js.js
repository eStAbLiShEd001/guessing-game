let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5
let highscore = 0

const startGuessing = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.btn-check').addEventListener('click', function() {
 let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        startGuessing('Ooops, please input a valid number!');
    } else if (guess !== secretNumber) {
        if (score > 1) {
            startGuessing(guess > secretNumber ?`${guess} is too high 😝!` : `${guess} is too low 😝!`);
            score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('body').style.backgroundImage = 'url(images/game-sad-gamer-playing-shooter-video-games-powerful-computer-using-rgb-keyboard-gaming-room-defeated-man-with-headphones-streaming-online-cyber-performing-through-online-tournament.jpg)'
            startGuessing('You lost the game! 😭');
           document.querySelector('.number').textContent = secretNumber + ' was the secret number. Press to reset.';

        }
    } else if (guess == secretNumber) {
        if (score > highscore) {
            highscore = score * 2;
            document.querySelector('.highscore').textContent = highscore;
        }
        startGuessing(`Yayyyy, ${guess} is the correct number 🤑!`); 
        document.querySelector('body').style.backgroundImage = 'url(images/pexels-cottonbro-4835419.jpg)'
        document.querySelector('.number').textContent = secretNumber;

    }
})
    document.querySelector('.btn-again').addEventListener('click', function() {
    document.querySelector('.guess').value = '';
    score = 5;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    startGuessing( 'Start guessing....');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundImage = 'url(images/pexels-element-digital-1293269.jpg)'

})