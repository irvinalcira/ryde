import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import TabBar from '../comps/TabBar';
import styles from '../styles/AddContactsStyles';

function AddContacts() {

  return (

    <SafeAreaView style={styles.Contacts}>
      <View style={styles.Contacts}>

        {/* Top Bar */}
        <View style={styles.TopBar}>
        <TouchableOpacity>
        <Text style={styles.Link}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.Title}>New Contact</Text>
        <TouchableOpacity>
        <Text style={styles.Link}>Create</Text>
        </TouchableOpacity>
        </View>



        {/*Text Inputs */}
        <Text style={styles.Heading}>Manually Add Contact</Text>

        <Text style={styles.InpLabel}>First Name</Text>
        <TextInput
        style={styles.Inp}
        placeholder="ie: Celine"
        />

        <Text style={styles.InpLabel}>Last Name</Text>
        <TextInput
        style={styles.Inp}
        placeholder="ie: Rogers"
        />

        <Text style={styles.InpLabel}>Phone Number</Text>
        <TextInput
        style={styles.Inp}
        keyboardType={'numeric'}
        placeholder="(xxx) xxx-xxxx"
        />

      <TabBar/>
      </View>
    </SafeAreaView>
  )
}

export default AddContacts;