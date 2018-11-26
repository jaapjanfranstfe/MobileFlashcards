import {FINISHED_A_QUIZ} from '../actions/quiz'

export default function decks (state = {lastFinishedQuizDate: null}, action) {
    switch (action.type) {
        case FINISHED_A_QUIZ: {
            return {
                ...state,
                lastFinishedQuizDate: action.date,
            };
        }
        default:
            return state;
    }
}