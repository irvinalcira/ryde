import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
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

// import comps

import InitialSetup from '../../comps/InitialSetup';


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

  // Favorites If Statements

  if(favPage === "FavBus"){
    comp = (
      <View
        style={HomePageStyles.FavBox}      >
        <ScrollView>
        <FavBus />
        </ScrollView>

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

  
  // Favorites If Statements Ends

  // User Sign in Page Async
  const [ Name, SetUserName ] = useState(null);

  async function GetUserName(){
    var getUserName = await AsyncStorage.getItem("storage");
    var parseUsername = JSON.parse(getUserName);
    username = parseUsername.UserName;
    SetUserName(username);
  }
  useEffect(() => {
    GetUserName();
    // For Clearing database
    // AsyncStorage.clear()
  },[]);

  // UserName InitialSetup Page Imported here
  var homePage = null;
    if(Name === null){

      homePage = (
        <View style={{flex:1}}>
          <InitialSetup />
        </View>

      )} else {

        homePage = (

          <View style={HomePageStyles.Container}>

          <Text style={Fonts.Title}>Welcome {Name},</Text>
          
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
  
              {comp}
  
          </View> 
          
          
  
            <View style={HomePageStyles.ContactContainer}>
  
                <View style={HomePageStyles.ContactHeader}>
                <Text style={Fonts.Heading}>
                  Contacts
                </Text>
                </View>
  
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
  
                <View style={HomePageStyles.ContactContent}>
                  <FavContacts />
                </View>
              </ScrollView>
  
            </View> 
  
          </View>
  
          
        )

    }
  
  // render homepage here

  return(

    <SafeAreaView style={HomePageStyles.Container}>

      { homePage }

    </SafeAreaView>

  )
};

