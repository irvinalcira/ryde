import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
//import style

import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

// import pages

import FavBus from './FavBus';
import FavTrain from './FavTrain';
import FavTaxi from './FavTaxi';
import FavContacts from './FavContacts';


export default function HomePage(){

  return(

    <SafeAreaView style={HomePageStyles.Container}>
      <View style={HomePageStyles.Container}>

        <Text style={[Fonts.Title]}>Welcome Irvin,</Text>
        
        <Text style={[Fonts.Heading,]}>
          Your Favorites
        </Text>

        <View style={HomePageStyles.FavContainer}>

          <TouchableOpacity style={Buttons.HomePageButton}>
           <Text>Bus Stations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Buttons.HomePageButton}>
           <Text>SkyTrain Stations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Buttons.HomePageButton}>
           <Text>Taxis</Text>
          </TouchableOpacity>

        </View>
      

        
        <View style={HomePageStyles.FavBox}>

          <Text style={Fonts.Body}>
            Start by adding your favorite Bus Station for quick access on the Home Page. You can edit, add, or remove favorites anytime.
          </Text>

        </View>

        
        

          <View style={HomePageStyles.ContactContainer}>

            <Text style={Fonts.Heading}>
              Contacts
            </Text>

          </View> 

        </View>

    </SafeAreaView>

  )
};

