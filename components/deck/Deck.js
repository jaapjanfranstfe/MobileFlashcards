import {connect} from "react-redux";
import React from 'react';

import {
    Text,
    Container,
    Content,
    Button
} from "native-base";

class Deck extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('deckTitle', 'Deck'),
        };
    };

    render() {
        const { deck, navigation } = this.props;
        const canStartQuiz = Object.values(deck.cards).length > 0;
        return (
            <Container>
                <Content padder>
                    <Text>{deck.title} {`(${Object.values(deck.cards).length} cards)`}</Text>
                    <Button block bordered={canStartQuiz} onPress={() => navigation.navigate(
                        'AddCard',
                        { deckId: deck.id }
                    )}>
                        <Text> Add Card </Text>
                    </Button>
                    <Button disabled={!canStartQuiz} block onPress={() => navigation.navigate(
                        'Quiz',
                        { deckId: deck.id }
                    )}>
                        <Text> Start quiz </Text>
                    </Button>


                </Content>


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
export default connect(mapStateToProps)(Deck)