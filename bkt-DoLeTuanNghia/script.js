const cardsArray = [
    'Genshin.jpg', 'Genshin.jpg', 'zzz.png', 'zzz.png', 
    'rock.jpg', 'rock.jpg', 'wibu.jpg', 'wibu.jpg'
];

let shuffledCards = cardsArray.sort(() => Math.random() - 0.5);
let firstCard = null;
let secondCard = null;
let score = 0;

function createBoard() {
    const board = document.getElementById("game-board");
    shuffledCards.forEach((image, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.style.backgroundImage = "url('back.png')";
        card.style.backgroundSize = "cover";
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (this.classList.contains("flipped") || secondCard) return;
    this.style.backgroundImage = `url('${shuffledCards[this.dataset.index]}')`;
    this.classList.add("flipped");
    
    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkMatch();
    }
}

function checkMatch() {
    if (firstCard.style.backgroundImage === secondCard.style.backgroundImage) {
        setTimeout(() => {
            firstCard.classList.add("hidden");
            secondCard.classList.add("hidden");
            score++;
            document.getElementById("score").textContent = score;
            resetCards();
        }, 500);
    } else {
        setTimeout(() => {
            firstCard.style.backgroundImage = "url('back.png')";
            secondCard.style.backgroundImage = "url('back.png')";
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}

document.addEventListener("DOMContentLoaded", createBoard);
