import {connect} from "react-redux";
import React from 'react';
import NoDecks from './NoDecks'

import {
    Text,
    Container,
    Card,
    CardItem,
    Content,
    Body,
    Button,
} from "native-base";

class DeckList extends React.Component {

    render() {
        const { decks } = this.props;
        const decksArray = Object.values(decks);

        return (
            <Container>
                { decksArray.length === 0 &&
                <NoDecks/>
                }

                {decksArray.length > 0 &&
                    <Content padder>
                        {decksArray.map(deck => (
                            <Card key={deck.id}>
                                <CardItem>
                                    <Body>
                                    <Text>{deck.name}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        ))}

                        <Button
                            full
                            rounded
                            primary
                            style={{marginTop: 10}}
                            onPress={() => this.props.navigation.navigate("EditScreenOne")}
                        >
                            <Text>Goto EditScreen One</Text>
                        </Button>
                    </Content>
                }
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