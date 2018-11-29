

export const FINISHED_A_QUIZ = 'FINISHED_A_QUIZ';

export function finishedAQuiz(dateObject) {
    const dateJsonString = dateObject.toJSON();
    return {
        type: FINISHED_A_QUIZ,
        date: dateJsonString
    }
}
