/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles/AppStyles';
import Main from './comps/Main';

function App(){
  return (

      <View style={styles.app}>
        <Main />
      </View>

  )
};

export default App;