import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import TabBar from '../comps/TabBar';
import AContactsStyles from '../styles/AddContactsStyles';

function AddContacts() {

  return (

    <SafeAreaView style={AContactsStyles.Contacts}>
      <View style={AContactsStyles.Contacts}>

        {/* Top Bar */}
        <View style={AContactsStyles.TopBar}>
        <TouchableOpacity>
        <Text style={AContactsStyles.Link}>Cancel</Text>
        </TouchableOpacity>
        <Text style={AContactsStyles.Title}>New Contact</Text>
        <TouchableOpacity>
        <Text style={AContactsStyles.Link}>Create</Text>
        </TouchableOpacity>
        </View>



        {/*Text Inputs */}
        <Text style={AContactsStyles.Heading}>Manually Add Contact</Text>

        <Text style={AContactsStyles.InpLabel}>First Name</Text>
        <TextInput
        style={AContactsStyles.Inp}
        placeholder="ie: Celine"
        />

        <Text style={AContactsStyles.InpLabel}>Last Name</Text>
        <TextInput
        style={AContactsStyles.Inp}
        placeholder="ie: Rogers"
        />

        <Text style={AContactsStyles.InpLabel}>Phone Number</Text>
        <TextInput
        style={AContactsStyles.Inp}
        keyboardType={'numeric'}
        placeholder="(xxx) xxx-xxxx"
        />

      <TabBar/>
      </View>
    </SafeAreaView>
  )
}

export default AddContacts;