import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {handleInitialDecks} from "./actions/decks";
import {connect, Provider} from "react-redux";
import { createStore } from 'redux';
import decksReducer from "./reducers/decks";
import middleware from "./middleware/index";

const store = createStore(decksReducer, middleware);

export default class App extends React.Component {

  componentDidMount() {
      store.dispatch(handleInitialDecks())
  }

  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

