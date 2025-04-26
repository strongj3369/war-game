// Coding Approach:
// 1. Classes: 
//    - Card: Represents each individual card with a suit and value.
//    - Deck: Manages deck operations (creation, shuffle, deal).
//    - Player: Tracks each player's hand and score.

// 2. Game Flow:
//    - Cards are dealt to two players.
//    - Each round, players play one card, and the higher card earns a point.
//    - Ties result in no points. Scores are tracked.
//    - At the end, the player with the most points wins.

// Implementation Steps:
// 1. Create and shuffle a full deck.
// 2. Deal cards equally between two players.
// 3. Loop through 26 rounds where each player plays a card.
// 4. Compare cards, update scores, and display results.
// 5. Display the final score and declare the winner.


// Structure of the Deck Class
class Deck {
  constructor() {
    this.cards = []; // Initialize an empty array to store the cards
  }

  createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; // Example suits
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']; // Example ranks

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push({ rank, suit }); // Push each card as an object into the deck
      }
    }
  }

  shuffle() {
    for (let currentIndex = this.cards.length - 1; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1)); // Generate a random index
      [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]]; // Swap cards
    }
  }

  drawCard() {
    return this.cards.pop(); // Removes and returns the last card in the deck
  }

  dealCards() {
    const half = Math.floor(this.cards.length / 2);
    return {
      player1Hand: this.cards.slice(0, half),
      player2Hand: this.cards.slice(half),
    };
  }
}

function playTurn(player1Hand, player2Hand) {
  const player1Card = player1Hand.pop(); // Player 1 draws a card
  const player2Card = player2Hand.pop(); // Player 2 draws a card

  console.log("Player 1 drew:", player1Card);
  console.log("Player 2 drew:", player2Card);

  const rankValues = {
    "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8,
    "9": 9, "10": 10, "Jack": 11, "Queen": 12, "King": 13, "Ace": 14,
  };

  if (rankValues[player1Card.rank] > rankValues[player2Card.rank]) {
    console.log("Player 1 wins this turn!");
  } else {
    console.log("Player 2 wins this turn!");
  }
}

// Test the fixed code
const myDeck = new Deck();
myDeck.createDeck();
myDeck.shuffle();

const { player1Hand, player2Hand } = myDeck.dealCards(); // Deal the cards
playTurn(player1Hand, player2Hand); // Play one turn
