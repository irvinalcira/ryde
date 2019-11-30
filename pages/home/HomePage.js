import React, {useState,useEffect} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';

//STYLE IMPORTS
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

//COMP IMPORTS
import InitialSetup from '../../comps/InitialSetup';

// FAV BOX IMPORTS
import FavBus from './FavBus';
import FavTrain from './FavTrain';
import FavTaxi from './FavTaxi';
import FavContacts from './FavContacts';


export default function HomePage(){

  // FAVORITE BOX CONTAINER USE STATE
  var comp = null;
  const [favPage, setFavPage] = useState("FavBus");

  // USER NAME DISPLAY USE STATE
  const [ Name, SetUserName ] = useState(null);

  // SET THE USERNAME
    async function GetUserName(){
      var getUsername = await AsyncStorage.getItem("user");
      var parseUsername = JSON.parse(getUsername);
      username = parseUsername.UserName;
      SetUserName(username);
      console.log('username: ', username)
    }
    useEffect(() => {
     GetUserName();

     // UN-COMMENT THE CODE BELOW TO RESET USER NAME TO NOTHING
    //  AsyncStorage.clear()
  
  },[]);

  // FAVORITES TAB BUTTONS PRESSED

  var favBus = ( <Text style={Fonts.FavButtonText}>Bus Stations</Text> );
  var favTrain = ( <Text style={Fonts.FavButtonText}>SkyTrain Stations</Text> );
  var favTaxi = ( <Text style={Fonts.FavButtonText}>Taxis</Text> );

  if(favPage === "FavBus"){
    comp = (
      <View style={HomePageStyles.FavBox}>
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
      <View style={[HomePageStyles.FavBox]}>
        <FavTrain />

      </View>
    ),
    favTrain = (
      <Text style={Fonts.FavButtonTextPressed}>SkyTrain Stations</Text>      
    )
  }

  if(favPage === "FavTaxi"){
    comp = (
      <View style={HomePageStyles.FavBox}> 
        <ScrollView> 
          <FavTaxi /> 
        </ScrollView>
      </View>
    ),
    favTaxi = (
      <Text style={Fonts.FavButtonTextPressed}>Taxis</Text>
    )
  }


    var HomePageSection = null;

    // IF THERE IS NO USER'S NAME STORED, SHOW SETUP SCREEN
    if(Name === null){
  
    HomePageSection = (
     <View style={{flex:1}}>
        <InitialSetup /> 
      </View>
  
    )} 

  
    
    // IF USER'S NAME STORED, SHOW HOME PAGE
    else {
      HomePageSection = (
        <View style={HomePageStyles.Container}>

        <Text style={Fonts.Title}>Hi {Name},</Text>
        

        {/* FAVORITES SECTION */}

        <Text style={Fonts.Heading}> Your Favorites </Text>

          <View style={HomePageStyles.FavContainer}>          

              <TouchableOpacity style={Buttons.HomePageButton}
              
                onPress={()=>{ setFavPage("FavBus"); }} >
              {favBus}
              </TouchableOpacity>

              <TouchableOpacity style={Buttons.HomePageButton}
                onPress={()=>{ setFavPage("FavTrain"); }} >
              {favTrain}
              </TouchableOpacity>

              <TouchableOpacity style={Buttons.HomePageButton}
                onPress={()=>{ setFavPage("FavTaxi"); }}   >
              {favTaxi}
              </TouchableOpacity>

            </View>


            {/* SHOWING FAVORITES BOX BASED ON SELECTION */}
            
            <View style={HomePageStyles.CompContainer}>
                  {comp}
          </View> 
        
        {/* END OF FAVORITES SECTION */}


        {/* CONTACTS SECTION */}

        <View style={HomePageStyles.ContactHeader}>
          <Text style={[Fonts.Heading]}>Contacts</Text>    
        </View>

          <View style={HomePageStyles.ContactContainer}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={HomePageStyles.ContactContent}>
                <FavContacts />
              </View>
            </ScrollView>

          </View> 

        {/* END OF CONTACTS SECTION */}

        </View>
      )};

  return(

    <SafeAreaView style={HomePageStyles.Container}>
      { HomePageSection }
    </SafeAreaView>

  )
};