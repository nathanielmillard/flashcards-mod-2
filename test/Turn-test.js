const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function(){
  it.skip('should be a function', function(){
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a guess', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it.skip('should store a Card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.card).to.deep.equal(card);
  });

})
