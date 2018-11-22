import { AsyncStorage }  from "react-native"

const DECKS = 'DECKS';
let decks = {};

export async function saveDeck(deck) {

    decks[deck.id] = deck;
    return AsyncStorage.setItem(DECKS, JSON.stringify(decks));

}

export function deleteDeck(deckId) {
    delete decks[deckId];
    return AsyncStorage.setItem(DECKS, JSON.stringify(decks));
}

export async function loadDecks() {
    const decksFromStorage = await AsyncStorage.getItem(DECKS);


    decks = decksFromStorage === null ? {} : JSON.parse(decksFromStorage);

    return decks;
}