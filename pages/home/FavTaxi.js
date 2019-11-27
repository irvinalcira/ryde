import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, AsyncStorage, TouchableOpacity,Image } from 'react-native';
import Communications from 'react-native-communications';
import {Actions} from 'react-native-router-flux';

// styles
import FavStyles from '../../styles/home/FavStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Divider from '../../comps/Divider';

export default function FavTaxi(){

  const [ favTaxi, setFavTaxi ] = useState([]);

    // GETTING CONTACTS USING ASYNC
    async function GetFavTaxi() {
      var datanew = await AsyncStorage.getItem("storage")
      var parseFavTaxi = JSON.parse(datanew);

      
    // console.log(parseFavTaxi.FavTaxi[0].favtaxiphone);
      setFavTaxi(parseFavTaxi.FavTaxi);
    }

    useEffect(() => {

      GetFavTaxi();

    },[]);


  return(
    <View style={FavStyles.CompBox}>

      {

        favTaxi.map((obj, i) => {

          console.log(favTaxi);
          return(

            <View>
              <TouchableOpacity>
                <View style={ContactsStyles.UserContainer}>

                  {/* Contact Name */}
                  <Text numberOfLines={1} style={Fonts.Name}>
              
                    {favTaxi.favtaxiname}

                  </Text>

                  <View style={ContactsStyles.ImageCont}>

                    <TouchableOpacity onPress = {() => Communications.phonecall( favTaxi.favtaxiphone , true)}>

                      <View style={ContactsStyles.ImageBox}>

                        <Image style={ContactsStyles.Image}
                                source={require('../../assets/icons/phone.png')} />
                                
                      </View>

                    </TouchableOpacity>

                  </View>

                </View>
              </TouchableOpacity>              
              <Divider />
            </View>
          )

        })

      }
{/* 
          <Text style={Fonts.Body}>
            Start by adding your favourite taxis for quick access. You can edit, add, or remove favorites anytime.
          </Text> */}
    </View>
  )
};