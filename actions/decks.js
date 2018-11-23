import uuidv1 from "uuid/v1"

export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_CARD = 'ADD_DECK_CARD';
export const REMOVE_DECK = 'REMOVE_DECK';

export function addDeck(deckData) {
    const deck = {
        title: deckData.title,
        id: uuidv1(),
        cards: {}
    };

    return {
        type: ADD_DECK,
        deck
    }
}

export function addDeckCard(cardData) {
    const card = {
        id: uuidv1(),
        question: cardData.question,
        answer: cardData.answer
    };

    return {
        type: ADD_DECK_CARD,
        card,
        deckId: cardData.deckId,
    }
}

export function removeDeck(deckId) {
    return {
        type: REMOVE_DECK,
        deckId
    }
}