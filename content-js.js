let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20
let highscore = 0

document.querySelector('.btn-check').addEventListener('click', function() {
 let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Ooops, please input a valid number!';
    } else if(guess > secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = `${guess} is too high 😝!`;
        score--
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('body').style.backgroundImage = 'url(images/game-sad-gamer-playing-shooter-video-games-powerful-computer-using-rgb-keyboard-gaming-room-defeated-man-with-headphones-streaming-online-cyber-performing-through-online-tournament.jpg)'
        document.querySelector('.message').textContent = 'You lost the game! 😭'
    }
    } else if (guess < secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = `${guess} is too low 😝!` 
        score--
        document.querySelector('.score').textContent = score
    } else {
        document.querySelector('body').style.backgroundImage = 'url(images/game-sad-gamer-playing-shooter-video-games-powerful-computer-using-rgb-keyboard-gaming-room-defeated-man-with-headphones-streaming-online-cyber-performing-through-online-tournament.jpg)'
        document.querySelector('.message').textContent = 'You lost the game! 😭'
    }
    } else if (guess == secretNumber) {
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.message').textContent = `Yayyyy, ${guess} is the correct number 🤑!` 
        document.querySelector('body').style.backgroundImage = 'url(images/pexels-cottonbro-4835419.jpg)'
        document.querySelector('.number').textContent = secretNumber;

    }
})

document.querySelector('.btn-again').addEventListener('click', function() {
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing....'
    document.querySelector('.number').textContent = '?';

})