const chai = require('chai');
const expect = chai.expect;

const Game= require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Gam', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store a currentRound', function() {
    const game = new Game(
      1,
      'What is a complex data type containing key value pairs?',
      ['object', 'array', 'function'], 'object'
    );
    expect(game.currentRound).to.equal('');
  });
});
