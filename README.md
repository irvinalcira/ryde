# ryde

Setting up the Simulator 

1. Clone and npm install</br>
2. npx react-native@0.60.0 upgrade --leagcy true </br>

-----------------------------------------------------------

Running on Xcode / Pod</br>

Run this code in your terminal</br>
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

To install Yarn run the code below in terminal</br>
brew install yarn

To install responsive screen componet run this in your terminal</br>
npm install react-native-responsive-screen --save

To link your fonts in the assests folder run this in your terminal</br>
yarn react-native link

-----------------------------------------------------------

Running on Android Studio (Android) </br>

Dependency Error for Gesture-Handler </br>

1. Update Cli</br>
npm i --save @react-native-community/cli-platform-android

2. Add react-native-gesture-handler</br>
yarn add react-native-gesture-handler
