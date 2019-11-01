import React from 'react';
import { View, Text, Button } from 'react-native';
import ContactsStyles from '../styles/ContactsStyles';

function Contacts(){
  return (

      <View style={ContactsStyles.Contacts}>
        <Text>Contacts</Text>

        <Text>You have no Contacts on Ryde</Text>

      </View>

  )
};

export default Contacts;