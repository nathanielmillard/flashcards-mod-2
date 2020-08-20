const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
//I might want to use a for each loop to take each object in this array
//and intantiate it as a new instance of a 'Card' each time and put those in an array
//then take this new array and turn it into a Deck
//pass that deck into a Round


class Game {
  constructor() {
    this.currentRound = ''
    this.cards = []
  }
  start(){
    makeCards();
    deck = new Deck(cards);
    round = new Round(deck);
    this.printMessage();
    this.printQuestion();
  }

  makeCards(){
    let newArray = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    this.cards = newArray
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
