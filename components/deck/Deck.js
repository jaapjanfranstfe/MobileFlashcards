import {connect} from "react-redux";
import React from 'react';

import {
    Text,
    Container,
    Content,
    Button
} from "native-base";

class Deck extends React.Component {

    render() {
        const { deck, navigation } = this.props;

        return (
            <Container>
                <Content padder>
                    <Text>{deck.title} {`(${Object.values(deck.cards).length} cards)`}</Text>
                    <Button block bordered onPress={() => navigation.navigate(
                        'AddCard',
                        { deckId: deck.id }
                    )}>
                        <Text> Add Card </Text>
                    </Button>
                    <Button block onPress={() => navigation.navigate(
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