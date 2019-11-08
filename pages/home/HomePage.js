import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
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

  const [favPage, setFavPage] = useState("FavBus");

  var comp = null;

  if(favPage === "FavBus"){
    comp = (
      <View
        style={HomePageStyles.FavBox}
      >
        <FavBus />
      </View>
    )
  }

  if(favPage === "FavTrain"){
    comp = (
      <View
        style={HomePageStyles.FavBox}
      >
        <FavTrain />
      </View>
    )
  }

  if(favPage === "FavTaxi"){
    comp = (
      <View
        style={HomePageStyles.FavBox}
      >
        <FavTaxi />
      </View>
    )
  }

  return(

    <SafeAreaView style={HomePageStyles.Container}>
      <View style={HomePageStyles.Container}>

        <Text style={Fonts.Title}>Welcome Irvin,</Text>
        
        <Text style={Fonts.Heading}>
          Your Favorites
        </Text>

        <View style={HomePageStyles.FavContainer}>

          <TouchableOpacity style={Buttons.HomePageButton}
            onPress={()=>{
              setFavPage("FavBus");
            }}
          >
           <Text>Bus Stations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Buttons.HomePageButton}
            onPress={()=>{
              setFavPage("FavTrain");
            }}          
          >
           <Text>SkyTrain Stations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Buttons.HomePageButton}
            onPress={()=>{
              setFavPage("FavTaxi");
            }}         
          >
           <Text>Taxis</Text>
          </TouchableOpacity>

        </View>
      

        
        <ScrollView>

          {comp}

        </ScrollView>

        
        

          <View style={HomePageStyles.ContactContainer}>

              <Text style={Fonts.Heading}>
                Contacts
              </Text>
              
          </View> 
            <ScrollView
              horizontal={true}
            >

              <View style={HomePageStyles.Container}>
                <FavContacts />
              </View>

            </ScrollView>


        </View>

    </SafeAreaView>

  )
};

