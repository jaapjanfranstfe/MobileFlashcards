# UdaciCards Mobile Flashcards
This application helps you train your brain! You can create decks with flashcards with it that you can use to practise and test your knowledge with.

# System requirements
This app has been tested on the Android platform only. Use an android device or simulator to test it.

# installation
You need a working node environment and  a package manager like npm or yarn installed.
You'll also need the expo cli tooling, follow instructions on `https://expo.io/` to get expo up and running.

Once you've checked out the sourcecode, run `yarn start` or `npm start` to start the application
which will also open an expo interface in your browser. From there, use either the simulator (requires simulator setup) or a real device (requires the expo app on your device)

# main features
* create your own flashcard decks with questions and answers
* Take a quiz to test your knowledge
* A reminder notification will be shown on your device at 20.00 hours if you have not yet completed a quiz on a given day. 

# extra features
* decks are stored on your device using redux-persist
* state management via redux
* ui components used from [NativeBase](https://nativebase.io/)