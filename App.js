import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import {handleInitialDecks} from "./actions/decks";
import {connect, Provider} from "react-redux";
import { createStore } from 'redux';
import decksReducer from "./reducers/decks";
import middleware from "./middleware/index";
import {Constants} from "expo"
import {createAppContainer, createStackNavigator} from 'react-navigation';
import { Entypo } from '@expo/vector-icons'


import DeckList from "./components/DeckList";

const store = createStore(decksReducer, middleware);


const MainNavigator = createStackNavigator({
        Home: {
            screen: DeckList,
        },

    });

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    state = {
        isReady: false
    };


    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        });
        this.setState({ isReady: true });
    }
    componentDidMount() {
      store.dispatch(handleInitialDecks())
  }

  render() {
      if (!this.state.isReady) {
          return <Expo.AppLoading />;
      }

      return (
        <Provider store={store}>
            <View style={styles.container}>
                <AppContainer uriPrefix="/app" style={{flex:1}}/>
            </View>

        </Provider>
      )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

