import React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';


import EContactsStyles from '../../styles/contacts/EmptyContactsStyles';

function EmptyContacts(){
  return (
    <View style={{padding:15}}>
        <Text style={[Fonts.Heading, {marginTop:0}]}>You have no Contacts on Ryde</Text>
        <Text style={Fonts.Body}>
        Start by adding your important contacts for quick phone or messaging access. You can edit, add, or remove contacts anytime.
        </Text>

        <TouchableOpacity  style={[Buttons.Main, {marginTop:35}]} onPress={() => Actions.AddContact()}>
        <Text style={Buttons.MainText}>Manually Add Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={Buttons.Alt} onPress={() => Actions.AddContact()}>
        <Text style={Buttons.MainText}>Import Contact from Phone</Text>
        </TouchableOpacity>
    </View>
        
  )
};

export default EmptyContacts;