import {ADD_DECK, ADD_DECK_QUESTION, RECEIVE_DECKS, REMOVE_DECK} from "../actions/decks";
// DEEP COPY CREATE, FIND POUT WHERE SAVE DECK FROM STORAGE IS USED INSTEAD OF FROM STORE
export default function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS: {
            return {
                ...state,
                ...action.decks
            };
        }
        case ADD_DECK: {
            const {deck} = action;

            return {
                ...state,
                [deck.id]: deck
            };
        }
        case ADD_DECK_QUESTION: {
            const {deckQuestion} = action;

            // expand the deck for given id into a new deck object
            const deck = {
                ...state[deckQuestion.deckId]
            };

            // copy array then push new question on it
            const newQuestions = [...deck.questions];
            newQuestions.push(deckQuestion);

            return {
                ...state,
                [deck.id]: {
                    ...deck,
                    questions: newQuestions
                }
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