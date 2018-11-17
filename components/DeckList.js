import {connect} from "react-redux";
import React from 'react';
import { Text, View } from 'react-native';

class DeckList extends React.Component {

    render() {
        return (
            <View>
                <Text>Decklist</Text>
            </View>
        );
    }
}

function mapStateToProps({decks}) {
    return {
        decks: decks
    }
}
export default connect(mapStateToProps)(DeckList)