class Round {
  constructor(array) {
    this.turns = 0
    this.deck = array
    this.incorrectGuesses = []
    this.currentCard = ''
    this.percentCorrect = 0
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  calculatePercentCorrect() {
    if (this.turns > 0) {
      let numWrong = this.incorrectGuesses.length
      let numRight = this.turns - numWrong
      this.percentCorrect = (numRight / this.turns) * 100
      return this.percentCorrect;
    }
    return this.percentCorrect;
  }
  takeTurn(guess) {
    this.currentCard = this.returnCurrentCard()
    let newTurn = new Turn(guess, this.currentCard);
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(newTurn.card.id)
    }
    this.turns++
    this.calculatePercentCorrect()
    return newTurn.giveFeedback()
  }
  endRound() {
    return `
    ** Round over! **
    You answered ${this.percentCorrect}% of the questions correctly!`
  }
}

const Turn = require('../src/Turn');
module.exports = Round
