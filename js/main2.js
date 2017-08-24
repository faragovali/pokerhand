var deck = [];
var suits = ['H', 'S', 'C', 'D'];
var numbers = [
    {'key': '2', value: 2},
    {'key': '3', value: 3},
    {'key': '4', value: 4},
    {'key': '5', value: 5},
    {'key': '6', value: 6},
    {'key': '7', value: 7},
    {'key': '8', value: 8},
    {'key': '9', value: 9},
    {'key': 'T', value: 10},
    {'key': 'J', value: 11},
    {'key': 'Q', value: 12},
    {'key': 'K', value: 13},
    {'key': 'A', value: 14}
];

for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
        var card = {
            suit: suits[i],
            numbers: numbers[j],
            index: Math.floor(Math.random() * 1000) + 1
        };

        deck.push(card)
    }
}

deck.sort(function (card1, card2) {
    return card1.index > card2.index ? 1 : -1;
});

var hand = deck.slice(0, 5);

var sortedhand = hand.sort(function (a, b) {
    return a.numbers.value > b.numbers.value ? 1 : -1
});

// var sortedhand = [
//     {index: 8, suit: 'C', numbers: {key: '2', value: 2}},
//     {index: 65, suit: 'C', numbers: {key: '3', value: 3}},
//     {index: 72, suit: 'C', numbers: {key: '4', value: 4}},
//     {index: 33, suit: 'C', numbers: {key: '5', value: 5}},
//     {index: 49, suit: 'C', numbers: {key: 'A', value: 14}}
// ];

//show sorted hand
var pokerhand = [];

for (var a = 0; a < sortedhand.length; a++) {
    pokerhand.push(sortedhand[a].suit + sortedhand[a].numbers.key);
}

document.getElementById("cards").innerHTML = pokerhand;

//Függvények
function isRoyalFlush() {

    return isFlush() && isStraight() && sortedhand[4].numbers.value === 14;
}


function isStraightFlush() {
    return isFlush() && isStraight();
}

function isFourOfAKind() {
    return sortedhand[0].numbers.value === sortedhand[3].numbers.value || sortedhand[1].numbers.value === sortedhand[4].numbers.value;
}

function isFullHouse() {
    return (sortedhand[0].numbers.value === sortedhand[1].numbers.value && sortedhand[2].numbers.value === sortedhand[4].numbers.value) ||
        (sortedhand[0].numbers.value === sortedhand[2].numbers.value && sortedhand[3].numbers.value === sortedhand[4].numbers.value);
}

function isFlush() {
    var suit = sortedhand[0].suit;
    for (var f = 0; f < sortedhand.length; f++) {
        if (sortedhand[f].suit !== suit) {
            return false;
        }
    }
    return true;
}

function isStraight() {
    for (var s = 0; s < sortedhand.length - 1; s++) {
        if (sortedhand[s].numbers.value + 1 !== sortedhand[s + 1].numbers.value) {
            return false;
        }

    }
    return true;
}

function isThreeOfAKind() {
    return sortedhand[0].numbers.value === sortedhand[2].numbers.value ||
        sortedhand[1].numbers.value === sortedhand[3].numbers.value ||
        sortedhand[2].numbers.value === sortedhand[4].numbers.value;
}

function countPairs() {
    var count = 0;
    for (var p = 0; p < sortedhand.length - 1; p++) {
        if (sortedhand[p].numbers.value === sortedhand[p + 1].numbers.value) {
            count++;
        }
    }
    return count;
}

if (isRoyalFlush()) {
    document.getElementById("result").innerHTML = " Yaaaay, Royal Flush";
} else if (isStraightFlush()) {
    document.getElementById("result").innerHTML = " Yay, Straight Flush";
} else if (isFourOfAKind()) {
    document.getElementById("result").innerHTML = " Yay, Four of a Kind";
} else if (isFullHouse()) {
    document.getElementById("result").innerHTML = " Yay, Full House";
} else if (isFlush()) {
    document.getElementById("result").innerHTML = " Yay, Flush";
} else if (isStraight()) {
    document.getElementById("result").innerHTML = " Yay, Straight";
} else if (isThreeOfAKind()) {
    document.getElementById("result").innerHTML = " Yay, Three of a Kind";
} else if (countPairs() === 1) {
    document.getElementById("result").innerHTML = " Yay, One Pair";
} else if (countPairs() === 2) {
    document.getElementById("result").innerHTML = " Yay, Two Pair";
} else {
    document.getElementById("result").innerHTML = " Buuu, High Card";
}