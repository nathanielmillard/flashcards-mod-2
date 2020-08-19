class Round {
  constructor(array) {
    this.turns = 0
    this.deck = array
  }
  returnCurrentCard(){
    return this.deck.cards[0]
  }
  takeTurn(guess){
    this.turns = this.turns++
    let newTurn = new Turn(guess, this.deck.cards[0]);
    return newTurn.giveFeedback()
  }
}

const Turn = require('../src/Turn');
module.exports = Round
