import {ADD_DECK, ADD_DECK_QUESTION, RECEIVE_DECKS, REMOVE_DECK} from "../actions/decks";
// DEEP COPY CREATE, FIND POUT WHERE SAVE DECK FROM STORAGE IS USED INSTEAD OF FROM STORE
export default function decks (state = {}, action) {
    switch (action.type) {
        case ADD_DECK: {
            const {deck} = action;

            return {
                ...state,
                [deck.id]: deck
            };
        }
        case ADD_DECK_QUESTION: {
            const {question, deckId} = action;

            const deck = {
                ...state[deckId]
            };

            const newQuestions = {
                ...deck.questions
            };
            newQuestions[question.id] = question;
            deck.questions = newQuestions;

            return {
                ...state,
                [deck.id]: deck
            };
        }
        case REMOVE_DECK: {
            const {deckId} = action;

            const newState = {
                ...state
            };

            delete newState[deckId];

            return newState;
        }
        default:
            return state;
    }
}