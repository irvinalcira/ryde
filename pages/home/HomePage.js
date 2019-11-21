import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';
//import style

import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

//import comps
import InitialSetup from '../../comps/InitialSetup';

// import pages

import FavBus from './FavBus';
import FavTrain from './FavTrain';
import FavTaxi from './FavTaxi';
import FavContacts from './FavContacts';


export default function HomePage(){

  // Favorites Box Container
  var comp = null;
  const [favPage, setFavPage] = useState("FavBus");

  // var nameInput = null;
  const [ Name, SetUserName ] = useState(null);

  async function GetUserName(){
    var getUsername = await AsyncStorage.getItem("storage");
    var parseUsername = JSON.parse(getUsername);
    username = parseUsername.UserName;
    SetUserName(username);
  }
  useEffect(() => {
   GetUserName();
  //  AsyncStorage.clear()

},[]);
  var nameInput = null;
      if(Name === null){
  
      nameInput = (
       <View style={{flex:1}}>
          <InitialSetup /> 
      </View>
  
    )} else {
      nameInput = (
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
        
        <ScrollView>

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
    )
  }
 
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
      
      { nameInput }



      

    </SafeAreaView>

  )
};

