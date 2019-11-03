import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import TabBar from '../comps/TabBar';
import AddContactsStyles from '../styles/AddContactsStyles';

function AddContacts() {

  return (

    <SafeAreaView style={AddContactsStyles.Contacts}>
      <View style={AddContactsStyles.Contacts}>

        {/* Top Bar */}
        <View style={AddContactsStyles.TopBar}>
        <TouchableOpacity>
        <Text style={AddContactsStyles.Link}>Cancel</Text>
        </TouchableOpacity>
        <Text style={AddContactsStyles.Title}>New Contact</Text>
        <TouchableOpacity>
        <Text style={AddContactsStyles.Link}>Create</Text>
        </TouchableOpacity>
        </View>



        {/*Text Inputs */}
        <Text style={AddContactsStyles.Heading}>Manually Add Contact</Text>

        <Text style={AddContactsStyles.InpLabel}>First Name</Text>
        <TextInput
        style={AddContactsStyles.Inp}
        placeholder="ie: Celine"
        />

        <Text style={AddContactsStyles.InpLabel}>Last Name</Text>
        <TextInput
        style={AddContactsStyles.Inp}
        placeholder="ie: Rogers"
        />

        <Text style={AddContactsStyles.InpLabel}>Phone Number</Text>
        <TextInput
        style={AddContactsStyles.Inp}
        keyboardType={'numeric'}
        placeholder="(xxx) xxx-xxxx"
        />

      <TabBar/>
      </View>
    </SafeAreaView>
  )
}

export default AddContacts;