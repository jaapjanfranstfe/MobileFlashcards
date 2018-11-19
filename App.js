import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import {handleInitialDecks} from "./actions/decks";
import {connect, Provider} from "react-redux";
import { createStore } from 'redux';
import decksReducer from "./reducers/decks";
import middleware from "./middleware/index";
import {Constants} from "expo"
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { Entypo } from '@expo/vector-icons'


import DeckList from "./components/DeckList";

const store = createStore(decksReducer, middleware);

const Tabs = createBottomTabNavigator({
    Decks: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Entypo name='list' size={30} color={tintColor} />
        },
    },
    AddDeck: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Add Entry',
            tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
        },
    },
});

const MainNavigator = createStackNavigator({
        Home: {
            screen: Tabs,
        },

    },
    {
        headerMode: 'none',
    });

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {

  componentDidMount() {
      store.dispatch(handleInitialDecks())
  }

  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <View style={{height: Constants.statusBarHeight}}>
                    <StatusBar />
                </View>
                <AppContainer uriPrefix="/app" style={{flex:1}}/>
            </View>

        </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

