const expect = require('chai').expect;
const pokerkez = require('./pokerkez');


const mockEmptyHand = [
{index: 33, suit: 'D', numbers: {key: '2', value: 2}},
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 49, suit: 'H', numbers: {key: '5', value: 5}},
{index: 65, suit: 'H', numbers: {key: '8', value: 8}},
{index: 72, suit: 'C', numbers: {key: 'A', value: 14}},
];


const mockFourOfAKind = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'H', numbers: {key: '3', value: 3}},
{index: 72, suit: 'C', numbers: {key: '3', value: 3}},
{index: 33, suit: 'D', numbers: {key: '3', value: 3}},
{index: 49, suit: 'H', numbers: {key: '5', value: 5}},
];


const mockThreeOfAKind = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'H', numbers: {key: '3', value: 3}},
{index: 72, suit: 'C', numbers: {key: '3', value: 3}},
{index: 33, suit: 'D', numbers: {key: '4', value: 4}},
{index: 49, suit: 'H', numbers: {key: '5', value: 5}},
];


const mockFullHouse = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'H', numbers: {key: '3', value: 3}},
{index: 72, suit: 'C', numbers: {key: '3', value: 3}},
{index: 33, suit: 'D', numbers: {key: '5', value: 5}},
{index: 49, suit: 'H', numbers: {key: '5', value: 5}},
];


const mockPair = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'H', numbers: {key: '3', value: 3}},
{index: 49, suit: 'H', numbers: {key: '5', value: 5}},
{index: 72, suit: 'C', numbers: {key: '6', value: 6}},
{index: 33, suit: 'D', numbers: {key: 'J', value: 11}},
];


const mockTwoPair = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'H', numbers: {key: '3', value: 3}},
{index: 49, suit: 'H', numbers: {key: '5', value: 5}},
{index: 72, suit: 'C', numbers: {key: '6', value: 6}},
{index: 33, suit: 'D', numbers: {key: '6', value: 6}},
];


const mockStraight = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'H', numbers: {key: '4', value: 4}},
{index: 49, suit: 'H', numbers: {key: '5', value: 5}},
{index: 72, suit: 'C', numbers: {key: '6', value: 6}},
{index: 33, suit: 'D', numbers: {key: '7', value: 7}},
];


const mockStraight2 = [
{index: 65, suit: 'H', numbers: {key: '2', value: 2}},
{index: 49, suit: 'H', numbers: {key: '3', value: 3}},
{index: 72, suit: 'C', numbers: {key: '4', value: 4}},
{index: 33, suit: 'D', numbers: {key: '5', value: 5}},
{index: 8, suit: 'C', numbers: {key: 'A', value: 14}},
];


const mockStraightFlush = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'C', numbers: {key: '4', value: 4}},
{index: 49, suit: 'C', numbers: {key: '5', value: 5}},
{index: 72, suit: 'C', numbers: {key: '6', value: 6}},
{index: 33, suit: 'C', numbers: {key: '7', value: 7}},
];


const mockFlush = [
{index: 8, suit: 'C', numbers: {key: '3', value: 3}},
{index: 65, suit: 'C', numbers: {key: '4', value: 4}},
{index: 49, suit: 'C', numbers: {key: '5', value: 5}},
{index: 72, suit: 'C', numbers: {key: '6', value: 6}},
{index: 33, suit: 'C', numbers: {key: '9', value: 9}},
];


const mockRoyalFlush = [
{index: 8, suit: 'C', numbers: {key: '10', value: 10}},
{index: 65, suit: 'C', numbers: {key: 'J', value: 11}},
{index: 49, suit: 'C', numbers: {key: 'Q', value: 12}},
{index: 72, suit: 'C', numbers: {key: 'K', value: 13}},
{index: 33, suit: 'C', numbers: {key: 'A', value: 14}},
];




describe('pokerkez', function () {
describe('.getHightCard(cards)', function () {
it('the highest card', function () {
return expect(pokerkez.getHighCard(mockEmptyHand)[0].numbers.key).to.equal('A');
});
});
describe('.isPair(cards)', function () {
it('mockEmptyHand', function () {
return expect(pokerkez.isPair(mockEmptyHand)).to.not.be.true;
});
it('mockPair', function () {
return expect(pokerkez.isPair(mockPair)).to.be.true;
});
it('mockFullHouse', function () {
return expect(pokerkez.isPair(mockFullHouse)).to.be.true;
});
});
describe('.isThreeOfAKind(cards)', function () {
it('mockEmptyHand', function () {
return expect(pokerkez.isThreeOfAKind(mockEmptyHand)).to.not.be.true;
});
it('mockPair', function () {
return expect(pokerkez.isThreeOfAKind(mockPair)).to.not.be.true;
});
it('mockThreeOfAKind', function () {
return expect(pokerkez.isThreeOfAKind(mockThreeOfAKind)).to.be.true;
});
it('mockFullHouse', function () {
return expect(pokerkez.isThreeOfAKind(mockFullHouse)).to.be.true;
});
});
describe('.isTwoPair(cards)', function () {
it('mockEmptyHand', function () {
return expect(pokerkez.isTwoPair(mockEmptyHand)).to.not.be.true;
});
it('mockPair', function () {
return expect(pokerkez.isTwoPair(mockPair)).to.not.be.true;
});
it('mockFullHouse', function () {
return expect(pokerkez.isTwoPair(mockFullHouse)).to.be.true;
});
it('mockTwoPair', function () {
return expect(pokerkez.isTwoPair(mockTwoPair)).to.be.true;
});
});
describe('.isStraight(cards)', function () {
it('mockPair', function () {
return expect(pokerkez.isStraight(mockPair)).to.not.be.true;
});
it('mockStraight', function () {
return expect(pokerkez.isStraight(mockStraight)).to.be.true;
});
it('mockStraight2', function () {
return expect(pokerkez.isStraight(mockStraight2)).to.be.true;
});
it('mockRoyalFlush', function () {
return expect(pokerkez.isStraight(mockRoyalFlush)).to.be.true;
});
});
describe('.isStraightFlush(cards)', function () {
it('mockStraightFlush', function () {
return expect(pokerkez.isStraightFlush(mockStraightFlush)).to.be.true;
});
it('mockStraight', function () {
return expect(pokerkez.isStraightFlush(mockStraight)).to.not.be.true;
});
});
describe('.isFourOfAKind(cards)', function () {
it('mockTwoPair', function () {
return expect(pokerkez.isFourOfAKind(mockTwoPair)).to.not.be.true;
});
it('mockFourOfAKind', function () {
return expect(pokerkez.isFourOfAKind(mockFourOfAKind)).to.be.true;
});
});
describe('.isFullHouse(cards)', function () {
it('mockThreeOfAKind', function () {
return expect(pokerkez.isFullHouse(mockThreeOfAKind)).to.not.be.true;
});
it('mockTwoPair', function () {
return expect(pokerkez.isFullHouse(mockTwoPair)).to.not.be.true;
});
it('mockFullHouse', function () {
return expect(pokerkez.isFullHouse(mockFullHouse)).to.be.true;
});
});
describe('.isFlush(cards)', function () {
it('mockStraight', function () {
return expect(pokerkez.isFlush(mockStraight)).to.not.be.true;
});
it('mockFlush', function () {
return expect(pokerkez.isFlush(mockFlush)).to.be.true;
});
it('mockStraightFlush', function () {
return expect(pokerkez.isFlush(mockStraightFlush)).to.be.true;
});
});
describe('.isRoyalFlush(cards)', function () {
it('mockStraight', function () {
return expect(pokerkez.isRoyalFlush(mockStraight)).to.not.be.true;
});
it('mockFlush', function () {
return expect(pokerkez.isRoyalFlush(mockFlush)).to.not.be.true;
});
it('mockStraightFlush', function () {
return expect(pokerkez.isRoyalFlush(mockStraightFlush)).to.not.be.true;
});
it('mockRoyalFlush', function () {
return expect(pokerkez.isRoyalFlush(mockRoyalFlush)).to.be.true;
});
});
});