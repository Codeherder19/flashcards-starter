const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
    this.deck = [];
  }

  startGame() {
    prototypeQuestions.forEach(flashCard => {
      let card = new Card(flashCard.id, flashCard.question, flashCard.answers, flashCard.correctAnswer);
      this.deck.push(card);
    });
    let deck = new Deck(this.deck);
    this.deck = deck.deck;
    let round = new Round(this.deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;
