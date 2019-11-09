import React from 'react';
import {
  Text,
  View
} from 'react-native';

import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

export default function FavContacts(){
  return(
    <View style={HomePageStyles.ContactBox}>

      <View style={HomePageStyles.ContactList}>

        <View style={HomePageStyles.ContactIconBox}>
            <Text style={Fonts.ContactIconFont}>
              I
            </Text>
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