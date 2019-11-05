import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import NavBarStyles from '../styles/comps/NavBarStyles';

function NavBar(){
  return(

      <View style={NavBarStyles.Container}>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image resizeMode='contain' style={NavBarStyles.Img}
              source={require('../assets/icons/home.png')}
            />
            <Text style={NavBarStyles.Text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image resizeMode='contain' style={NavBarStyles.Img}
              source={require('../assets/icons/bus.png')}
            />
            <Text style={NavBarStyles.Text}>Buses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image resizeMode='contain' style={NavBarStyles.Img}
              source={require('../assets/icons/skytrain.png')}
            />
            <Text style={NavBarStyles.Text}>SkyTrains</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button} onPress={() => Actions.Taxis()}>
            <Image resizeMode='contain' style={NavBarStyles.Img}
              source={require('../assets/icons/taxi.png')}
            />
            <Text style={NavBarStyles.Text}>Taxis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={NavBarStyles.Button}>
            <Image resizeMode='contain' style={NavBarStyles.Img}
              source={require('../assets/icons/contact.png')}
            />
            <Text style={NavBarStyles.Text}>Contacts</Text>
            </TouchableOpacity>



      </View>
  )
};

export default NavBar;