import {Button, Text, Content} from "native-base";
import React from "react";

const QuizResult = ({ onReset, score, totalNrOfCards }) => {

    let percentage = ((score / totalNrOfCards) * 100).toFixed(1);
    percentage = percentage % 1 > 0 ? percentage : Math.round(percentage);

    return <Content padder>
            <Text>{`Your score is ${percentage}%`}</Text>
            <Button block onPress={() => onReset(true)}><Text> Restart Quiz </Text></Button>
            <Button block onPress={() => onReset(false)}><Text> Back to Deck </Text></Button>
        </Content>
};

export default QuizResult;