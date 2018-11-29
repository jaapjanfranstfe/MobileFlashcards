import {connect} from "react-redux";
import React from 'react';

import {
    Text,
    Container,
    Card,
    CardItem,
    Content,
    Body,
    Fab,
    Icon, View, Button
} from "native-base";
import QuizResult from "./QuizResult";
import QuizQuestion from "./QuizQuestion";
import {finishedAQuiz, handleFinishedAQuiz} from "../../actions/quiz";
import {sameDay, setLocalNotification} from "../../utils/helpers";

class Quiz extends React.Component {
    static navigationOptions = {
        title: 'Quiz',
    };

    state = {
        currentcardIndex: 0,
        score: 0
    };

    quizQuestionAnswered = (answeredCorrectly) => {
        const { dispatch } = this.props;
        const newScore = answeredCorrectly ? this.state.score + 1 : this.state.score;
        const newIndex = this.state.currentcardIndex + 1;

        this.setState({
            currentcardIndex: newIndex,
            score: newScore,
        });

        if(newIndex >= Object.values(this.props.deck.cards).length) {
            dispatch(finishedAQuiz(new Date()));

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            setLocalNotification(tomorrow);
        }
    };

    resetQuiz = (wantsToRetry) => {
        const { navigation } = this.props;

        if(wantsToRetry) {
            this.setState({
                currentcardIndex: 0,
                score: 0,
            });
        } else {
            navigation.goBack();
        }

    }

    render() {
        const { deck } = this.props;
        const { currentcardIndex, score } = this.state;
        const cardsArray = Object.values(deck.cards);
        const currentCard = cardsArray[currentcardIndex];
        const nrOfRemainingCards = cardsArray.length - currentcardIndex;
        const quizIsFinished = currentcardIndex >= cardsArray.length;

        return (
            <Container>
                {quizIsFinished && <QuizResult score={score} totalNrOfCards={cardsArray.length} onReset={this.resetQuiz}/>}
                {!quizIsFinished && <QuizQuestion nrOfRemainingCards={nrOfRemainingCards} card={currentCard} onAnswered={this.quizQuestionAnswered}/>}
            </Container>
        );
    }
}

function mapStateToProps({decks}, props) {
    const { deckId } = props.navigation.state.params;

    return {
        deck: decks[deckId]
    }
}
export default connect(mapStateToProps)(Quiz)