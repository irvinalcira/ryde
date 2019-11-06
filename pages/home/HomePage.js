import React from 'react';
import {
  View,
  Text
} from 'react-native';

//import style

import HomePageStyles from '../../styles/home/HomePageStyles';

export default function HomePage(){
  return(

    <View style={HomePageStyles.HomeStyles}>
      <Text style={HomePageStyles.WelcomeText}>
        Welcome Irvin,
      </Text>

      <Text style={HomePageStyles.FavText}>
        Your Favorites
      </Text>

      <View style={HomePageStyles.FavTab}>
        <Text style={HomePageStyles.FavTabText}>
          Bus Station
        </Text>
        <Text style={HomePageStyles.FavTabText}>
          SkyTrain Station
        </Text>
        <Text style={HomePageStyles.FavTabText}>
          Taxis
        </Text>
      </View>

      <View style={HomePageStyles.ContactTab}>

        <Text style={HomePageStyles.FavText}>
          Contacts
        </Text>

      </View>

    </View>

  )
};