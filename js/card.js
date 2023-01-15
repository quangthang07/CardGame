'use strict'

let cards = [];
const imagesUrl = [
    'https://img.freepik.com/free-vector/lucky-cat-holding-gold-cartoon-illustration_138676-2790.jpg',
    'https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg',
    'https://img.freepik.com/free-vector/cute-dog-sticking-her-tongue-out-cartoon-icon-illustration_138676-2709.jpg',
    'https://img.freepik.com/free-vector/cute-cow-sitting-eating-grass-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-4780.jpg',
    'https://img.freepik.com/free-vector/cute-king-pig-wearing-glasses-cartoon-illustration-animal-concept-isolated-flat-cartoon_138676-2291.jpg',
    'https://img.freepik.com/free-vector/cute-husky-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-4567.jpg',
    'https://img.freepik.com/free-vector/cute-chicken-chef-holding-fried-chicken-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-3132.jpg',
    'https://img.freepik.com/free-vector/cute-duck-with-umbrella-rain-cartoon-icon-illustration_138676-2693.jpg',
    'https://img.freepik.com/free-vector/cute-octopus-eating-takoyaki-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-pr_138676-4795.jpg',
    'https://img.freepik.com/free-vector/cute-monkey-hug-banana_138676-3306.jpg'

]

function init() {
    const container = document.querySelector(".card-container");
    for (let i = 0; i < 10; i++) {
        cards.push(createCard(i));
    }
    for(let i = 9; i >= 0; i--) {
        cards.push(createCard(i));
    }
    while(cards.length) {
        let r = Math.floor(Math.random()*cards.length);
        container.appendChild(cards[r]);
        cards.splice(r, 1);
    }

}

let openedCard = [];
function createCard(num) {
    const card = document.createElement("div");
    card.className = "card";
    const front = document.createElement("div");
    front.className = "card-front";
    const img = document.createElement('img');
    img.src = imagesUrl[num];
    front.appendChild(img);
    const back = document.createElement("div");
    back.className = "card-back";
    card.appendChild(front);
    card.appendChild(back);
    card.onclick = function () {
        if (this.className !== 'card open' && openedCard.length < 2) {
            this.className = "card open";
            openedCard.push(this);
            // console.log(openedCard.length);
            if (openedCard.length % 2 == 0) {
                sleep(600).then(() => {
                    if (openedCard[0].querySelector('img').src !== openedCard[1].querySelector('img').src) {
                        openedCard.forEach(item => {
                            item.className = 'card';
                        });
                    }
                    openedCard = [];
                    if (document.querySelectorAll('.card.open').length == 20) {
                        window.alert('You win');
                    }
                });
            }
                
        }
    }
    
    return card;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }