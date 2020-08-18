const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function(){
  it('should be a function', function(){
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
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

  it.skip('should return guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnGuess()).to.equal('pug');
  });

  it.skip('should return Card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.returnCard()).to.equal('{ id: 1, question: "What is Robbie\'s favorite animal", answers: ["sea otter", "pug", "capybara"], correctAnswer: "sea otter"}');
  });

  it.skip('should evaluate guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should giveFeedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

})
