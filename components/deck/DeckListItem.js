import { Card, CardItem, H1, H3 } from 'native-base'
import React from 'react';
import { View, Slider, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    cardItem: {
        alignSelf: 'stretch',
        flexDirection: 'column',
    },
})

export const DeckListItem = ({title, nrOfQuestions, onPress}) => (
    <Card style={styles.card}>
        <CardItem  style={styles.cardItem} button onPress={onPress}>
                <H1 style={{paddingBottom: 10}}>{title}</H1>
                <H3>{nrOfQuestions} questions</H3>
        </CardItem>
    </Card>
)
