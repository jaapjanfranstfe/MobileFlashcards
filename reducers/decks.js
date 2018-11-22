import {ADD_DECK, RECEIVE_DECKS, REMOVE_DECK} from "../actions/decks";

export default function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case ADD_DECK:
            const { deck } = action;

            return {
                ...state,
                [deck.id]: deck
            };
        case REMOVE_DECK:
            const { deckId } = action;

            const newState = {
                ...state
            };

            delete newState[deckId];

            return newState;
        default:
            return state;
    }
}