import React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';


import EContactsStyles from '../../styles/contacts/EmptyContactsStyles';

function EmptyContacts(){
  return (
    <SafeAreaView style={EContactsStyles.Contacts}>
      <View style={EContactsStyles.Contacts}>
        <Text style={EContactsStyles.Title}>Contacts</Text>

        <Text style={EContactsStyles.Heading}>You have no Contacts on Ryde</Text>
        <Text style={EContactsStyles.Description}>
        Start by adding your important contacts for quick phone or messaging access. You can edit, add, or remove contacts anytime.
        </Text>
        
        <TouchableOpacity  style={EContactsStyles.ImportBut} onPress={() => Actions.AddContacts()}>
       <Text style={EContactsStyles.ImportButText}>Import Contacts from Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={EContactsStyles.ManualBut} onPress={() => Actions.AddContacts()}>
       <Text style={EContactsStyles.ImportButText}>Manually Add Contacts</Text>
        </TouchableOpacity>

      </View>
      </SafeAreaView>
  )
};

export default EmptyContacts;