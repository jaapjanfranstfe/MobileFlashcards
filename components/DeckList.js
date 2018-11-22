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
    Icon,View
} from "native-base";

class DeckList extends React.Component {

    render() {
        const { decks } = this.props;
        const decksArray = Object.values(decks);

        return (
            <Container>
                <Content padder  style={{ flex: 1 }}>
                    { decksArray.length === 0 &&
                        <Text>No decks. Create your first deck!</Text>
                    }

                    {decksArray.map(deck => (
                        <Card key={deck.id}>
                            <CardItem>
                                <Body>
                                <Text>{deck.name}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    ))}

                </Content>

                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => console.log('oresse')}>
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