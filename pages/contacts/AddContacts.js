import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Cam from '../CameraRoll';
//done

import AContactsStyles from '../../styles/contacts/AddContactsStyles';
import Fonts from '../../styles/FontsStyles';

function AddContacts() {

  return (

    <SafeAreaView style={AContactsStyles.Contacts}>
      <View style={AContactsStyles.Contacts}>

        {/* Nav Bar */}
        <View style={AContactsStyles.TopBar}>
        <TouchableOpacity>
        <Text style={Fonts.NavLink}>Cancel</Text>
        </TouchableOpacity>
        <Text style={Fonts.NavTitle}>New Contact</Text>
        <TouchableOpacity>
        <Text style={Fonts.NavLink} onPress={() => Actions.Contacts()}>Create</Text>
        </TouchableOpacity>
        </View>
        {/* Add Contact */}
        <View style={AContactsStyles.AddImgView}>
         <Cam />
  
        </View>
       

        {/*Text Inputs */}
        <Text style={Fonts.Heading}>Manually Add Contact</Text>

        <Text style={Fonts.InpLabel}>First Name</Text>
        <TextInput
        style={Fonts.Inp}
        placeholder="ie: Celine"
        />

        <Text style={Fonts.InpLabel}>Last Name</Text>
        <TextInput
        style={Fonts.Inp}
        placeholder="ie: Rogers"
        />

        <Text style={Fonts.InpLabel}>Phone Number</Text>
        <TextInput
        style={Fonts.Inp}
        keyboardType={'numeric'}
        placeholder="(xxx) xxx-xxxx"
        />

      </View>
    </SafeAreaView>
  )
}

export default AddContacts;