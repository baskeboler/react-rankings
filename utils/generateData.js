const faker = require('faker');
const fs = require('fs');
var cards = {};
for (var i = 0; i < 100; i++) {
  var card = faker.helpers.userCard()
  card.score = faker.random.number({min: 0, max: 10000});
  card.credits = faker.random.number({min: 0, max: 1000});
  cards[card.email] = card;
}
fs.writeFileSync("data.json", JSON.stringify(cards, null, '\t'));
console.log(cards);
