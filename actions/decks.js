import { saveDeck, deleteDeck, loadDecks } from "../storage/decks";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function handleInitialDecks() {
    return (dispatch) => {
        return loadDecks()
            .then((decks) => dispatch(receiveDecks(decks)));
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function handleAddDeck(deck) {
    return (dispatch) => {
        return saveDeck(deck)
            .then((savedDeck) => dispatch(addDeck(savedDeck)));
    }
}

function removeDeck(deckId) {
    return {
        type: REMOVE_DECK,
        deckId
    }
}

export function handleRemoveDeck(deckId) {
    return (dispatch) => {
        return deleteDeck(deckId)
            .then(() => dispatch(removeDeck(deckId)));
    }
}