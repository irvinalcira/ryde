

import React, {useState} from 'react';
import {View, Text} from 'react-native'
import Modal from "react-native-modal";

import Contacts from "../pages/contacts/Contacts";

function AddContactPopup(props){
 
    return(

        <Modal isVisible={false}>
          <View style={{ flex: 1, backgroundColor:'white' }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
    )
}

export default AddContactPopup;