/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import AppStyles from './styles/AppStyles';
import Main from './pages/Main';

function App(){
  return (

      <View style={AppStyles.app}>
        <Main />
      </View>

  )
};

export default App;