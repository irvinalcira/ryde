import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import Communications from 'react-native-communications';

//import styles
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

//import comps
import ContactPopup from '../../comps/ContactPopup';
import data from '../../storage';

export default function FavContacts(){

  // Set Popup 
  const [ Popup, setPopup ] = useState(false);

  // Favorite Contact List Async
  const [ favContact, setFavContact ] = useState([]);
  
  async function GetFavContacts() {
    var data = await AsyncStorage.getItem("storage");
    var parseContactName = JSON.parse(data);
    favContact = parseContactName.Contacts;
    console.log(data);
    setFavContact(parseContactName.Contacts.firstname);
  }
  useEffect(() => {
    GetFavContacts();
  },[]);

  return(
    <View style={HomePageStyles.ContactBox}>

      <View style={HomePageStyles.ContactList}>

        <ContactPopup Popup={Popup} setPopup={setPopup} />
            
            <View style={HomePageStyles.ContactIconBox}>

              <View style={HomePageStyles.ContactIconBox}>
                <TouchableOpacity
                onPress={() => {setPopup(true)}}
                >
                  <Text style={Fonts.ContactIconFont}>
                    {firstname.charAt(0)}
                  </Text>
                </TouchableOpacity>
              </View>
            <Text style={Fonts.ContactNameFonts}>{firstname}></Text>

            </View>        
        
      </View>

    </View>
  )
};