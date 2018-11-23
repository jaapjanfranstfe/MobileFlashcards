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

class Quiz extends React.Component {

    render() {
        const { deck, navigation } = this.props;

        return (
            <Container>
                <Content padder>
                    <Text>Quiz</Text>


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
export default connect(mapStateToProps)(Quiz)