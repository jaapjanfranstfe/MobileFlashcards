import React from 'react';
import { StyleSheet } from 'react-native'
import { Text, Content } from 'native-base'

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const NoDecks = () => (
    <Content contentContainerStyle={styles.centered}>
        <Text>No decks. Create your first deck!</Text>
    </Content>
);

export default NoDecks;