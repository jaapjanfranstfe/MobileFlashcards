import {timeToString} from "../utils/helpers";

export const FINISHED_A_QUIZ = 'FINISHED_A_QUIZ';

function finishedAQuiz(dateString) {
    return {
        type: FINISHED_A_QUIZ,
        date: dateString
    }
}

export function handleFinishedAQuiz(date) {

    // TODO handle async notificion shizzle

    finishedAQuiz(timeToString(date));
}