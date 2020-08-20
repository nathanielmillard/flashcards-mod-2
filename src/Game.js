const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

//I might want to use a for each loop to take each object in this array
//and intantiate it as a new instance of a 'Card' each time and put those in an array
//then take this new array and turn it into a Deck
//pass that deck into a Round


class Game {
  constructor(cardsArray) {
    this.cards = cardsArray
  }
  start(cards){
    deck = new Deck(cards);
    round = new Round(deck);
    this.printMessage();
    this.printQuestion();
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
