import React, {Fragment} from "react";
import {
    Button, View,
    Text, Content
} from "native-base";

class QuizQuestion extends React.Component {

    state = {
      showAnswer: false,
    };

    handleShowAnswer = () => {
        this.setState({
            showAnswer: true,
        })
    };

    handlerAnswerQuestion = (wasCorrect) => {
        this.setState({
          showAnswer: false
        });

        this.props.onAnswered(wasCorrect);
    };

    render() {
        const { nrOfRemainingCards, card, onAnswered} = this.props;
        const { showAnswer } = this.state;

        return (
            <Content>
                <Text>{`${nrOfRemainingCards} questions remaining`}</Text>
                {!showAnswer ?   (
                    <Fragment>
                        <Text>{card.question}</Text>
                        <Button block onPress={this.handleShowAnswer}><Text> Show Answer </Text></Button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Text>{card.answer}</Text>
                        <Button block onPress={() => this.handlerAnswerQuestion(true)}><Text> Correct </Text></Button>
                        <Button block onPress={() => this.handlerAnswerQuestion(false)}><Text> Incorrect </Text></Button>
                    </Fragment>
                    )}
            </Content>

        );
    }
}

export default QuizQuestion