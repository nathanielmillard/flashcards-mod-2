class Round {
  constructor(array) {
    this.turns = 0
    this.deck = array
  }
  returnCurrentCard(){
    return this.deck.cards[0]
  }
}

module.exports = Round
