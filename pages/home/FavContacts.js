import React, {useState} from 'react';
import {
  Text,
  View,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

//Comps
import ContactPopup from '../../comps/ContactPopup';

//Styles
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';

// data
import data from "../../storage";

export default function FavContacts(){

  const [Popup, setPopup] = useState(false);

  return(
    <View style={HomePageStyles.ContactBox}>

      <View style={HomePageStyles.ContactList}>
        
      <ContactPopup Popup={Popup} setPopup={setPopup} />

        <View style={HomePageStyles.ContactIconBox}>
          <TouchableOpacity
            onPress={()=>{setPopup(true)}}
          >
            <Text style={Fonts.ContactIconFont}>
              I
            </Text>
          </TouchableOpacity>
        </View>
            <Text style={Fonts.ContactNameFonts}>Irvin</Text>
        
      </View>

      <View style={HomePageStyles.ContactList}>

        <View style={HomePageStyles.ContactIconBox}>
            <Text style={Fonts.ContactIconFont}>
              S
            </Text>
        </View>
            <Text style={Fonts.ContactNameFonts}>Shenis</Text>
        
      </View>

      <View style={HomePageStyles.ContactList}>

        <View style={HomePageStyles.ContactIconBox}>
            <Text style={Fonts.ContactIconFont}>
              A
            </Text>
        </View>
            <Text style={Fonts.ContactNameFonts}> Abhi</Text>
        
      </View>

      <View style={HomePageStyles.ContactList}>

        <View style={HomePageStyles.ContactIconBox}>
            <Text style={Fonts.ContactIconFont}>
              B
            </Text>
        </View>
            <Text style={Fonts.ContactNameFonts}>Bin</Text>
        
      </View>

      <View style={HomePageStyles.ContactList}>

        <View style={HomePageStyles.ContactIconBox}>
            <Text style={Fonts.ContactIconFont}>
              R
            </Text>
        </View>
            <Text style={Fonts.ContactNameFonts}>Ramin</Text>
        
      </View>

      <View style={HomePageStyles.ContactList}>

        <View style={HomePageStyles.ContactIconBox}>
            <Text style={Fonts.ContactIconFont}>
              H
            </Text>
        </View>
            <Text style={Fonts.ContactNameFonts}>Henry</Text>
        
      </View>

    </View>
  )
};