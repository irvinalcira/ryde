import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';

// Components
import Cam from '../../comps/CameraRoll';

// Styles
import AContactStyles from '../../styles/contacts/AddContactStyles';
import Fonts from '../../styles/FontsStyles';

function AddContact() {

  return (

    <SafeAreaView style={AContactStyles.Container}>
      <View style={AContactStyles.Container}>

        {/* Nav Bar */}
        <View style={AContactStyles.TopBar}>
        <TouchableOpacity>
        <Text style={Fonts.NavLink}>Cancel</Text>
        </TouchableOpacity>
        <Text style={Fonts.NavTitle}>New Contact</Text>
        <TouchableOpacity>
        <Text style={Fonts.NavLink} onPress={() => Actions.pop()}>Create</Text>
        </TouchableOpacity>
        </View>

        {/* Add Contact */}

        <View style={AContactStyles.AddImgView}>

         <Cam />
  
        </View>
       

        {/*Text Inputs */}

        <Text style={Fonts.InpLabel}>First Name</Text>
        <TextInput
        style={Fonts.Inp}
        placeholder="John"
        placeholderTextColor='gray'
        />

        <Text style={Fonts.InpLabel}>Last Name</Text>
        <TextInput
        style={Fonts.Inp}
        placeholder="Doe"
        placeholderTextColor='gray'
        />

        <Text style={Fonts.InpLabel}>Phone Number</Text>
        <TextInput
        style={Fonts.Inp}
        keyboardType={'number-pad'}
        placeholder="(604) 333-3333"
        placeholderTextColor='gray'
        maxLength={10}
        />

      </View>
    </SafeAreaView>
  )
}

export default AddContact;