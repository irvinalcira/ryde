import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';

//STYLES IMPORT
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

//COMPS IMPORT
import ContactPopup from '../../comps/ContactPopup';
import data from '../../storage';

function FavContacts(){

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

      {
        favContact.map((obj,i)=>{
          return (
            <View style={[HomePageStyles.ContactList, {width:95}]}>

            {/* CONTACT CALL/MESSAGE POPUP */}
            <ContactPopup Popup={Popup} setPopup={setPopup} />

            {/* CONTACT  */}
            <TouchableOpacity onPress={() => {setPopup(true)}}>
              
                {/* CONTACT ICON */}
                <View style={HomePageStyles.ContactIconBox}>
                    <Text style={Fonts.ContactIconFont}> {obj.firstname[0]} </Text>
                </View>
                {/* CONTACT NAME */}
                <Text numberOfLines={1} style={[Fonts.ContactNameFonts, {textAlign:'center', fontSize:11, paddingHorizontal:15}]}>{obj.firstname}</Text>
            </TouchableOpacity>
            {/* END OF CONTACT */}
            
            </View>
                )
              })
            }

    </View>


  )
};

export default FavContacts;