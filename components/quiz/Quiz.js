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

class Quiz extends React.Component {

    state = {
        currentcardIndex: 0,
        score: 0
    };

    quizQuestionAnswered = (answeredCorrectly) => {
        const newScore = answeredCorrectly ? this.state.score + 1 : this.state.score;

        this.setState({
            currentcardIndex: this.state.currentcardIndex + 1,
            score: newScore,
        });
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