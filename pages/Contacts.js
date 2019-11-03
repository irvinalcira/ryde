import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import TabBar from '../comps/TabBar';
import ContactsStyles from '../styles/ContactsStyles';

function Contacts(){
  return (
    <SafeAreaView style={ContactsStyles.Contacts}>
      <View style={ContactsStyles.Contacts}>
        <Text style={ContactsStyles.Title}>Contacts</Text>

        <Text style={ContactsStyles.Heading}>You have no Contacts on Ryde</Text>
        <Text style={ContactsStyles.Description}>
        Start by adding your important contacts for quick phone or messaging access. You can edit, add, or remove contacts anytime.
        </Text>
        


      <TabBar />
      </View>
      </SafeAreaView>
  )
};

export default Contacts;