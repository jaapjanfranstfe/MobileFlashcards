import {saveDeck, deleteDeck, loadDecks, saveDeckQuestion} from "../storage/decks";
import uuidv1 from "uuid/v1"

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_DECK_QUESTION = 'ADD_DECK_QUESTION';
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

export function handleAddDeck(title) {
    const id = uuidv1();

    const deck = {
        id: id,
        title: title,
        questions: []
    };

    return (dispatch) => {
        return saveDeck(deck)
            .then(() => dispatch(addDeck(deck)));
    }
}

function addDeckQuestion(deckQuestion) {
    return {
        type: ADD_DECK_QUESTION,
        deckQuestion,
    }
}

export function handleAddDeckQuestion(questionData) {
    return (dispatch) => {
        return saveDeckQuestion(questionData)
        .then(() => dispatch(addDeckQuestion(questionData)));
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