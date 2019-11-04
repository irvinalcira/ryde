import React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import TabBar from '../comps/TabBar';
import EContactsStyles from '../styles/EmptyContactsStyles';

function EmptyContacts(){
  return (
    <SafeAreaView style={EContactsStyles.Contacts}>
      <View style={EContactsStyles.Contacts}>
        <Text style={EContactsStyles.Title}>Contacts</Text>

        <Text style={EContactsStyles.Heading}>You have no Contacts on Ryde</Text>
        <Text style={EContactsStyles.Description}>
        Start by adding your important contacts for quick phone or messaging access. You can edit, add, or remove contacts anytime.
        </Text>
        
        <TouchableOpacity  style={EContactsStyles.ImportBut}>
       <Text style={EContactsStyles.ImportButText}>Import Contacts from Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={EContactsStyles.ManualBut}>
       <Text style={EContactsStyles.ImportButText}>Manually Add Contacts</Text>
        </TouchableOpacity>

      <TabBar />
      </View>
      </SafeAreaView>
  )
};

export default EmptyContacts;