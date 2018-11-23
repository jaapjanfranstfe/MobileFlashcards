import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import {createAppContainer, createStackNavigator} from 'react-navigation';


import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import AddQuestion from "./components/AddQuestion";
import {persistor, store} from "./store";

const MainNavigator = createStackNavigator({
        DeckList: {
            screen: DeckList,
        },
        AddDeck: {
            screen: AddDeck,
        },
        AddQuestion: {
            screen: AddQuestion,
        },
        Deck: {
            screen: Deck,
        },
    },
{
    initialRouteName: 'DeckList'
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
            Ionicons: require("native-base/Fonts/Ionicons.ttf"),

        });
        this.setState({ isReady: true });
    }

  render() {
      if (!this.state.isReady) {
          return <Expo.AppLoading />;
      }

      return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <View style={styles.container}>
                    <AppContainer uriPrefix="/app" style={{flex:1}}/>
                </View>
            </PersistGate>
        </Provider>
      )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

