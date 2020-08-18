const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  it.skip('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });
})
