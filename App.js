import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import {createAppContainer, createStackNavigator} from 'react-navigation';


import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import Deck from "./components/Deck";
import Quiz from "./components/quiz/Quiz";
import {persistor, store, storedStatePromise} from "./store";
import AddCard from "./components/AddCard";
import {sameDay, setLocalNotification} from "./utils/helpers";

const MainNavigator = createStackNavigator({
        DeckList: {
            screen: DeckList,
        },
        AddDeck: {
            screen: AddDeck,
        },
        AddCard: {
            screen: AddCard,
        },
        Deck: {
            screen: Deck,
        },
        Quiz: {
            screen: Quiz,
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

    componentDidMount() {
        storedStatePromise
            .then((restoredState) => {
                const { quiz } = restoredState
                const {lastFinishedQuizDate} = quiz;
                let currentDate = new Date();

                console.log('YOOO:', quiz.lastFinishedQuizDate)
                if(lastFinishedQuizDate) {
                    const lastFinishedQuizDateObject = new Date(lastFinishedQuizDate);
                    if(sameDay(lastFinishedQuizDateObject, currentDate)) {
                        console.log('Same day! schedule for tomorrow')
                        currentDate.setDate(currentDate.getDate() + 1);
                    }

                }
                setLocalNotification(currentDate);
            });


    }

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

