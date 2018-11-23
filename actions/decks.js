import uuidv1 from "uuid/v1"

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_QUESTION = 'ADD_DECK_QUESTION';
export const REMOVE_DECK = 'REMOVE_DECK';

export function addDeck(deckData) {
    const deck = {
        title: deckData.title,
        id: uuidv1(),
        questions: {}
    };

    return {
        type: ADD_DECK,
        deck
    }
}

export function addDeckQuestion(questionData) {
    const question = {
        id: uuidv1(),
        question: questionData.question,
        answer: questionData.answer
    };

    return {
        type: ADD_DECK_QUESTION,
        question,
        deckId: questionData.deckId,
    }
}

export function removeDeck(deckId) {
    return {
        type: REMOVE_DECK,
        deckId
    }
}