import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import ContactsStyles from '../styles/contacts/ContactsStyles';


function AddButton(props) {
    return (
        <TouchableOpacity onPress={()=>{props.setPopup(true)}
        }>
          <Image 
          style={ContactsStyles.Add}
          source={require('../assets/icons/add.png')}
          />
          </TouchableOpacity>
    )

}

export default AddButton;