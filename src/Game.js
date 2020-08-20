const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = '';
    this.cards = [];
  }
  start() {
    this.makeCards();
    const deck = new Deck(this.cards);
    const round = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(round);
  }
  makeCards() {
    let newArray = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    this.cards = newArray
  }
  printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
