import React from 'react';

import {
    Text,
    Container,
    Input,
    Button,
    Content,
    Item
} from "native-base";
import {connect} from "react-redux";
import {handleAddDeckQuestion} from "../actions/decks";

class AddDeck extends React.Component {

    state = {
        question: '',
        answer: '',
    };

    handleQuestionChange = value => {

        this.setState({
            ...this.state,
            question: value
        })
    };

    handleAnswerChange = value => {

        this.setState({
            ...this.state,
            answer: value
        })
    };

    handleSubmit = () => {
        const { dispatch, navigation } = this.props;

        dispatch(handleAddDeckQuestion({
            ...this.state,
            deckId: navigation.state.params.deckId
        }));

        this.setState({
            question: '',
            answer: '',
        });

        navigation.goBack();
    };

    handleCancel = () => {
        const {navigation} = this.props;

        this.state({
            question: '',
            answer: '',
        });

        navigation.goBack();
    };

    render() {

        return (
            <Container>
                <Content padder>
                    <Item regular>
                        <Input onChangeText={this.handleQuestionChange} placeholder="Question" value={this.state.question}/>
                    </Item>
                    <Item regular>
                        <Input onChangeText={this.handleAnswerChange} placeholder="Answer" value={this.state.answer}/>
                    </Item>
                    <Button block disabled={this.state.question === '' && this.state.answer === null} onPress={this.handleSubmit}><Text> Add question </Text></Button>
                    <Button bordered block onPress={this.handleCancel}><Text> Cancel </Text></Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(AddDeck)