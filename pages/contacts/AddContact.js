import React, {useState, useEffect} from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';

// Components
import Cam from '../../comps/CameraRoll';

// Styles
import AContactStyles from '../../styles/contacts/AddContactStyles';
import Fonts from '../../styles/FontsStyles';

function AddContact(props) {

  const [FName,setFName] = useState('');
  const [LName,setLName] = useState('');
  const [PNumber,setPNumber] = useState('');

  console.log('First Name:', FName)
  console.log('Last Name:', LName)
  console.log('Phone Number:', PNumber)

  return (

    <SafeAreaView style={AContactStyles.Container}>
      <View style={AContactStyles.Container}>

        {/* Nav Bar */}

        <View style={AContactStyles.TopBar}>
        <TouchableOpacity onPress={() => Actions.pop()}>
        <Text style={Fonts.NavLink}>Cancel</Text>
        </TouchableOpacity>

        <Text style={Fonts.NavTitle}>New Contact</Text>

        <TouchableOpacity>
        <Text style={Fonts.NavLink} onPress={() => Actions.pop()}>Create</Text>
        </TouchableOpacity>
        </View>

        {/* End of Nav Bar */}


        {/* Add Contact */}

        {/* Camera Component */}
        <View style={AContactStyles.AddImgView}>
            <Cam uri={props.uri}/>
        </View>
       

        {/*First Name Input */}
        <Text style={Fonts.InpLabel}>First Name</Text>
        <TextInput style={Fonts.Inp} placeholder="John" placeholderTextColor='gray'
        onChangeText = {(Text)=> setFName(Text)} value={FName}
        />

        {/*Last Name Input */}
        <Text style={Fonts.InpLabel}>Last Name</Text>
        <TextInput style={Fonts.Inp} placeholder="Doe" placeholderTextColor='gray'
        onChangeText = {(Text)=> setLName(Text)} value={LName}
        />
        
        {/* Phone Number Input */}
        <Text style={Fonts.InpLabel}>Phone Number</Text>
        <TextInput
        style={Fonts.Inp} keyboardType={'number-pad'} placeholder="(604) 333-3333" placeholderTextColor='gray' maxLength={10}
        onChangeText = {(Text)=> setPNumber(Text)} value={PNumber}
        />

      </View>
    </SafeAreaView>
  )
}

export default AddContact;