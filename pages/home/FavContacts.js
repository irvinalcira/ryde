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
    console.log(parseContactName.Contacts[0].firstname);
    setFavContact(parseContactName.Contacts);
  }
  useEffect(() => {
    GetFavContacts();
  },[]);

  return(
  
    
    <View style={HomePageStyles.ContactBox}>

      <View style={HomePageStyles.ContactList}>
            {
              favContact.map((obj,i)=>{
                  return (
                    <View style={{backgroundColor:'blue', justifyContent:'center',alignItems:'center'}}>
                      <ContactPopup Popup={Popup} setPopup={setPopup} />
                        
                        <TouchableOpacity onPress={() => {setPopup(true)}}>

                        {/* ICON */}
                        <View style={HomePageStyles.ContactIconBox}>
                          <View>
                              <Text style={Fonts.ContactIconFont}>
                                {obj.firstname[0]}
                              </Text>
                          </View>
                        </View>  
                        {/* CONTACT'S NAME */}
                        <Text style={Fonts.ContactNameFonts}>{obj.firstname}</Text>
                      </TouchableOpacity>
                  </View>
                      )
            })
          }
      </View>

    </View>
  )
};