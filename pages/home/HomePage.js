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

  // Favorites Box Container
  var comp = null;
  const [favPage, setFavPage] = useState("FavBus");

  // Favorites Tab Buttons Pressed Styling

  var favBus = (
    <Text style={Fonts.FavButtonText}>Bus Stations</Text>
  );
  var favTrain = (
    <Text style={Fonts.FavButtonText}>SkyTrain Stations</Text>
  );
  var favTaxi = (
    <Text style={Fonts.FavButtonText}>Taxis</Text>
  );

  if(favPage === "FavBus"){
    comp = (
      <View
        style={HomePageStyles.FavBox}
      >
        <FavBus />

      </View>
    ),
    favBus = (
      <Text style={Fonts.FavButtonTextPressed}>Bus Stations</Text>
    )
  }

  if(favPage === "FavTrain"){
    comp = (
      <View
        style={HomePageStyles.FavBox}
      >
        <FavTrain />
      </View>
    ),
    favTrain = (
      <Text style={Fonts.FavButtonTextPressed}>SkyTrain Stations</Text>      
    )
  }

  if(favPage === "FavTaxi"){
    comp = (
      <View
        style={HomePageStyles.FavBox}
      >
        <FavTaxi />
      </View>
    ),
    favTaxi = (
      <Text style={Fonts.FavButtonTextPressed}>Taxis</Text>
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
           {favBus}
          </TouchableOpacity>

          <TouchableOpacity style={Buttons.HomePageButton}
            onPress={()=>{
              setFavPage("FavTrain");
            }}          
          >
           {favTrain}
          </TouchableOpacity>

          <TouchableOpacity style={Buttons.HomePageButton}
            onPress={()=>{
              setFavPage("FavTaxi");
            }}         
          >
           {favTaxi}
          </TouchableOpacity>

        </View>
      
        <View style={HomePageStyles.CompContainer}>
        
        <ScrollView>

            {comp}

        </ScrollView>

        </View>
        
        

          <View style={HomePageStyles.ContactContainer}>

              <Text style={Fonts.Heading}>
                Contacts
              </Text>
              
          </View> 
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >

              <View style={HomePageStyles.Container}>
                <FavContacts />
              </View>

            </ScrollView>


        </View>

    </SafeAreaView>

  )
};

