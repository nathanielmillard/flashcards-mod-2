const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {

  }
  start(prototypeQuestions){
    deck = new Deck(prototypeQuestions);
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
