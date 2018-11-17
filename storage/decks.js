import { AsyncStorage } from "react-native"

const DECKS = 'DECKS';
let decks = {};

export function saveDeck(deck) {

    decks[deck.id] = deck;
    return AsyncStorage.setItem(DECKS, deck);

}

export function deleteDeck(deckId) {
    delete decks[deckId];
    return AsyncStorage.setItem(DECKS, decks);
}

export async function loadDecks() {
    const decksFromStorage = await AsyncStorage.getItem(DECKS);

    decks = decksFromStorage === null ? {} : decksFromStorage;

    return decks;
}