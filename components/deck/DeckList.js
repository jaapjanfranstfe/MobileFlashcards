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
    Icon,
} from "native-base";

class DeckList extends React.Component {
    static navigationOptions = {
        title: 'UdaciCards',
    };

    render() {
        const { decks, navigation } = this.props;
        const decksArray = Object.values(decks);

        return (
            <Container>
                <Content padder>
                    { decksArray.length === 0 &&
                        <Text>No decks. Create your first deck!</Text>
                    }

                    {decksArray.map(deck => (
                        <Card key={deck.id}>
                            <CardItem button onPress={() => this.props.navigation.navigate(
                                'Deck',
                                { deckId: deck.id,
                                  deckTitle: deck.title,
                                }
                            )}>
                                <Body>
                                    <Text>{deck.title} {`(${Object.values(deck.cards).length} cards)`}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    ))}

                </Content>

                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => navigation.navigate('AddDeck')}>
                    <Icon name="add" />
                </Fab>
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