const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store a currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.equal('');
  });

  it('should instantiate cards', function() {
    const game = new Game();
    game.makeCards();
    expect(game.cards[0]).to.be.an.instanceof(Card);
  });
});
