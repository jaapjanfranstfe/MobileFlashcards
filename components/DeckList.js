import {connect} from "react-redux";
import React from 'react';
import {
    Text,
    Container,
    Card,
    CardItem,
    Content,
    Right,
    Icon,
    Button
} from "native-base";

class DeckList extends React.Component {

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>a card!</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
        );
    }
}

function mapStateToProps({decks}) {
    return {
        decks: decks
    }
}
export default connect(mapStateToProps)(DeckList)