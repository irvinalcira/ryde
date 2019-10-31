/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/ContactsStyles';

function Contacts(){
  return (

      <View style={styles.contacts}>
        <Text>Contacts</Text>

        <Text>You have no Contacts on Ryde</Text>

      </View>

  )
};

export default Contacts;