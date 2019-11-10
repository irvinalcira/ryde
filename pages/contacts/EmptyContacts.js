import React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';


import EContactsStyles from '../../styles/contacts/EmptyContactsStyles';

function EmptyContacts(){
  return (
    <SafeAreaView style={EContactsStyles.Container}>
      <View style={EContactsStyles.Container}>
        <Text style={Fonts.Title}>Contacts</Text>

        <Text style={Fonts.Heading}>You have no Contacts on Ryde</Text>
        <Text style={Fonts.Body}>
        Start by adding your important contacts for quick phone or messaging access. You can edit, add, or remove contacts anytime.
        </Text>
        
        <TouchableOpacity  style={[Buttons.Main, {marginTop:35}]} onPress={() => Actions.AddContact()}>
       <Text style={Buttons.MainText}>Import Contacts from Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={Buttons.Alt} onPress={() => Actions.AddContact()}>
       <Text style={Buttons.MainText}>Manually Add Contacts</Text>
        </TouchableOpacity>

      </View>
      </SafeAreaView>
  )
};

export default EmptyContacts;