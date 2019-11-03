import React from 'react';
import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import TabBar from '../comps/TabBar';
import styles from '../styles/EmptyContactsStyles';

function EmptyContacts(){
  return (
    <SafeAreaView style={styles.Contacts}>
      <View style={styles.Contacts}>
        <Text style={styles.Title}>Contacts</Text>

        <Text style={styles.Heading}>You have no Contacts on Ryde</Text>
        <Text style={styles.Description}>
        Start by adding your important contacts for quick phone or messaging access. You can edit, add, or remove contacts anytime.
        </Text>
        
        <TouchableOpacity  style={styles.ImportBut}>
       <Text style={styles.ImportButText}>Import Contacts from Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.ManualBut}>
       <Text style={styles.ImportButText}>Manually Add Contacts</Text>
        </TouchableOpacity>

      <TabBar />
      </View>
      </SafeAreaView>
  )
};

export default EmptyContacts;