import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, AsyncStorage, TouchableOpacity,Image } from 'react-native';
import Communications from 'react-native-communications';

//STYLES IMPORT
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import AContactStyles from '../../styles/contacts/AddContactStyles';

//COMPS IMPORT
import ContactPopup from '../../comps/ContactPopup';
import data from '../../storage';
import AddPopup from '../../comps/AddPopup';
import AddPopupStyles from '../../styles/comps/AddPopupStyles';

function FavContacts(){

  // Set Popup 
  const [ Popup, setPopup ] = useState(false);

  // Favorite Contact List Async
  const [ favContact, setFavContact ] = useState([]);
  
  async function GetFavContacts() {
    var data = await AsyncStorage.getItem("storage");
    var parseContactName = JSON.parse(data);
    // console.log("imagenew",parseContactName.Contacts[0].firstname[0]);
    setFavContact(parseContactName.Contacts);
  }
  useEffect(() => {
    GetFavContacts();
  },[]);

  var showIcon = null;

  return(
      <View style={HomePageStyles.ContactBox}>

      {
        favContact.map((obj,i)=>{

          
          if (obj.image === undefined) {
            showIcon = (
              <View style={HomePageStyles.ContactIconBox}>
                <Text style={Fonts.ContactIconFont}> {obj.firstname[0].toUpperCase()} </Text>
              </View>
            ) } else {
              showIcon = (
                <View style={HomePageStyles.ContactIconBox}>
                <Image  source={{uri:obj.image}}style={HomePageStyles.ProfPic} />
                </View>
              )
            }
          
          return (
            <View style={[HomePageStyles.ContactList, {width:95}]}>

            {/* CONTACT CALL/MESSAGE POPUP */}
            <ContactPopup Popup={Popup} setPopup={setPopup} { ...obj } />

            {/* CONTACT  */}
            <TouchableOpacity onPress={() => {setPopup(true)} }>
              
                {/* CONTACT ICON */}
                { showIcon }
                
                {/* CONTACT NAME */}
                <Text numberOfLines={1} style={[Fonts.ContactNameFonts, {textAlign:'center', fontSize:11, paddingHorizontal:15}]}>{obj.firstname}</Text>
            </TouchableOpacity>
            {/* END OF CONTACT */}
            </View>
                )
              })
            }

      <AddPopup Popup={Popup} setPopup={setPopup} />
      <TouchableOpacity onPress={()=>{setPopup(true)}}>
          
          {/* CONTACT ICON */}
          <View style={HomePageStyles.ContactIconBox2}>
             <Text style={Fonts.ContactIconFont2}> + </Text>
          </View>
          
          {/* CONTACT NAME */}
          <Text numberOfLines={1} style={[Fonts.ContactNameFonts, {textAlign:'center', fontSize:11, paddingHorizontal:15}]}>Add Contact</Text>
      </TouchableOpacity>

    </View>


  )
};

export default FavContacts;