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
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import DeckList from "./components/DeckList";

const store = createStore(decksReducer, middleware);

const Tabs = createMaterialBottomTabNavigator({
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
            tabBarIcon: ({ tintColor }) => <Entypo name='plus' size={30} color={tintColor} />
        },
    },
},{
    initialRouteName: 'Decks',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
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

