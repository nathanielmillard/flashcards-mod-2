class Round {
  constructor(array) {
    this.turns = 0
    this.deck = array
    this.incorrectGuesses = []
    this.currentCard = ''
  }
  returnCurrentCard(){
    return this.deck.cards[this.turns]
  }
  takeTurn(guess){
    this.currentCard = this.returnCurrentCard()
    let newTurn = new Turn(guess, this.currentCard);
    if (!newTurn.evaluateGuess()){
      this.incorrectGuesses.push(newTurn.card.id)
    };
    this.turns++
    return newTurn.giveFeedback()
  }
}

const Turn = require('../src/Turn');
module.exports = Round
